const { Link } = ReactRouterDOM

export function BookPreview({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <article className="book-preview flex column align-center">
        <h2>
          {book.title} - {book.listPrice.amount}
          {book.listPrice.currencyCode === 'EUR' ? '€' : '$'}
        </h2>
        <h3>Category: {book.category}</h3>
        <h5>Author: {book.authors}</h5>
        <div className="img-wrapper">
          <img className="img-book" src={book.thumbnail} />
        </div>
      </article>
    </Link>
  )
}
