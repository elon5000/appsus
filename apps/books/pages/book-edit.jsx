import { GoogleSearch } from '../cmps/google-search.jsx'
import { bookService } from '../services/book.service.js'

export class bookEdit extends React.Component {
  state = {
    book: {
      category: '',
      description: '',
      language: 'en',
      subtitle: '',
      title: '',
      listPrice: {
        amount: 0,
      },
    },
  }

  componentDidMount() {
    this.loadBook()
  }

  loadBook = () => {
    const { bookId } = this.props.match.params
    if (!bookId) return
    bookService.getBookById(bookId).then((book) => this.setState({ book }))
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === 'price') {
      this.setState((prevState) => ({
        book: { ...prevState.book, [listPrice]: { amount: value } },
      }))
    }
    this.setState((prevState) => ({
      book: { ...prevState.book, [field]: value },
    }))
  }

  onSaveBook = (ev) => {
    ev.preventDefault()
    bookService.saveBook(this.state.book).then(() => {
      this.props.history.push('/book')
    })
  }

  render() {
    const { category, description, language, subtitle, title, listPrice } =
      this.state.book
    return (
      <section className="book-edit flex column align-center">
        {!title && <GoogleSearch />}
        <h2 className="book-edit-title">Book: {title}</h2>
        <form
          className="edit-form flex column align-center"
          onSubmit={this.onSaveBook}
        >
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
          <input
            type="text"
            name="subtitle"
            onChange={this.handleChange}
            value={subtitle}
          />
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
          <input
            type="text"
            name="language"
            onChange={this.handleChange}
            value={language}
          />
          <input
            type="text"
            name="category"
            onChange={this.handleChange}
            value={category}
          />
          <input
            type="text"
            name="price"
            onChange={this.handleChange}
            value={listPrice.amount}
          />
          <button>Submit</button>
        </form>
      </section>
    )
  }
}
