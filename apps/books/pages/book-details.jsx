import { ReviewAdd } from '../cmps/review-add.jsx'
import { ReviewList } from '../cmps/reviews-list.jsx'
import { bookService } from '../services/book.service.js'

const { Link, Route } = ReactRouterDOM

export class BookDetails extends React.Component {
  state = {
    book: null,
  }

  componentDidMount() {
    console.log(this.props)
    this.loadBook()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.loadBook()
    }
  }

  loadBook = () => {
    const { bookId } = this.props.match.params
    bookService.getBookById(bookId).then((book) => {
      if (!book) return this.props.history.push('/')
      this.setState({ book })
    })
  }

  onGoBack = () => {
    this.props.history.push('/book')
  }

  onRemoveBook = () => {
    bookService.removeBook(this.state.book.id).then(this.onGoBack)
  }

  onSaveReview = (review) => {
    const { bookId } = this.props.match.params
    bookService.addReview(review, bookId).then(() => this.loadBook())
  }

  onRemoveReview = (reviewId, bookId) => {
    bookService.removeReview(reviewId, bookId).then(() => this.loadBook())
  }

  render() {
    const { book } = this.state
    if (!book) return <div>Loading...</div>
    const nextBookId = bookService.getMoreBookId(book.id, true)
    const prevBookId = bookService.getMoreBookId(book.id, false)
    return (
      <section className="book-details flex column align-center">
        <h2>
          {book.title} - {book.listPrice.currencyCode === 'EUR' ? '€' : '$'}
          {book.listPrice.amount}
        </h2>
        <h3>Category: {book.category}</h3>
        <h5>Author: {book.authors}</h5>
        <div className="img-wrapper">
          <img className="img-book" src={book.thumbnail} />
        </div>
        <div>
          <button onClick={this.onGoBack}>Back to Books</button>
          <button onClick={this.onRemoveBook}>X</button>
          <Link to={`/book/${prevBookId}`}>
            <button>Prev Book</button>
          </Link>
          <Link to={`/book/${nextBookId}`}>
            <button>Next Book</button>
          </Link>
          <Link to={`/book/edit/${book.id}`}>
            <button>Edit Book</button>
          </Link>
        </div>
        <ReviewAdd onSaveReview={this.onSaveReview} />
        <ReviewList
          reviews={book.reviews}
          bookId={book.id}
          onRemove={this.onRemoveReview}
        />
      </section>
    )
  }
}
