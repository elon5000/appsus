import { BookPreview } from './book-preview.jsx'

export function BookList({ books }) {
  return (
    <section className="book-list flex justify-center">
      {books.map((book) => (
        <div className="book-item flex align-center" key={book.id}>
          <BookPreview book={book} key={book.id} />
        </div>
      ))}
    </section>
  )
}
