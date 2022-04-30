import { bookService } from '../services/book.service.js'

import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'

const { Link } = ReactRouterDOM

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks() {
    bookService
      .query(this.state.filterBy)
      .then((books) => this.setState({ books }))
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks())
  }

  render() {
    const { books } = this.state
    return (
      <section className="book-app">
        <Link to="/book/edit">
          <button>Add Book</button>
        </Link>
        <BookFilter
          onSetFilter={this.onSetFilter}
          history={this.props.history}
        />
        <BookList books={books} onSelectBook={this.onSelectBook} />
      </section>
    )
  }
}
