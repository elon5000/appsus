import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import bookData from './data.js'

export const bookService = {
  query,
  getBookById,
  removeBook,
  getMoreBookId,
  addReview,
  removeReview,
  saveBook,
}

const KEY = 'booksDB'

function query(filterBy) {
  let books = _loadFromStorage()
  if (!books) {
    books = _createBooks()
    _saveToStorage(books)
  }

  if (filterBy) {
    let { name, maxPrice, minPrice } = filterBy
    if (!minPrice) minPrice = 0
    if (!maxPrice) maxPrice = Infinity
    books = books.filter(
      (book) =>
        book.title.toLowerCase().includes(name.toLowerCase()) &&
        book.listPrice.amount <= maxPrice &&
        book.listPrice.amount >= minPrice
    )
  }

  return Promise.resolve(books)
}

function getBookById(bookId) {
  const books = _loadFromStorage()
  const book = books.find((book) => book.id === bookId)
  return Promise.resolve(book)
}

function saveBook(book) {
  if (book.id) return _updateBook(book)
  else return _addNewBook(book)
}

function addReview(review, bookId) {
  return getBookById(bookId).then((book) => {
    book.reviews = book.reviews ? book.reviews : []
    review.id = utilService.makeId()
    book.reviews.push(review)
    _updateBook(book)
  })
}

function removeReview(reviewId, bookId) {
  return getBookById(bookId).then((book) => {
    let reviewIdx = book.reviews.findIndex((review) => review.id === reviewId)
    book.reviews.splice(reviewIdx, 1)
    _updateBook(book)
  })
}

function removeBook(bookId) {
  let books = _loadFromStorage()
  books = books.filter((book) => book.id !== bookId)
  _saveToStorage(books)
  return Promise.resolve()
}

function getMoreBookId(bookId, bol) {
  const books = _loadFromStorage()
  const bookIdx = _getBookIdx(bookId)
  let moreBookIdx
  if (bol) {
    moreBookIdx = bookIdx + 1 === books.length ? 0 : bookIdx + 1
  } else {
    moreBookIdx = bookIdx - 1 === -1 ? books.length - 1 : bookIdx - 1
  }
  return books[moreBookIdx].id
}

function _createBooks() {
  const books = bookData
  return books
}

function _saveToStorage(books) {
  storageService.saveToStorage(KEY, books)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}

function _getBookIdx(bookId) {
  let books = _loadFromStorage()
  const bookIdx = books.findIndex((book) => bookId === book.id)
  return bookIdx
}

function _updateBook(bookToUpdate) {
  let books = _loadFromStorage()
  books = books.map((book) =>
    book.id === bookToUpdate.id ? bookToUpdate : book
  )
  _saveToStorage(books)
  return Promise.resolve()
}
