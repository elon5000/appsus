export class BookFilter extends React.Component {
  state = {
    filterBy: {
      name: '',
      minPrice: '',
      maxPrice: '',
    },
  }

  inputRef = React.createRef()

  componentDidMount() {
    this.inputRef.current.focus()
  }

  handleChange = ({ target }) => {
    const value = target.type === 'number' ? +target.value : target.value
    const field = target.name
    this.setState(
      (prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
      () => {
        this.props.onSetFilter(this.state.filterBy)
      }
    )
  }

  onFilter = (ev) => {
    ev.preventDefault()
    this.props.onSetFilter(this.state.filterBy)
  }

  render() {
    const { name, maxPrice, minPrice } = this.state.filterBy
    return (
      <section className="book-filter">
        <form
          onSubmit={this.onFilter}
          className="form-filter flex align-center"
        >
          <input
            type="text"
            id="by-name"
            placeholder="By name"
            name="name"
            value={name}
            onChange={this.handleChange}
            ref={this.inputRef}
          />

          <input
            type="number"
            id="by-minPrice"
            placeholder="By min price"
            name="minPrice"
            value={minPrice}
            onChange={this.handleChange}
          />

          <input
            type="number"
            id="by-maxPrice"
            placeholder="By max price"
            name="maxPrice"
            value={maxPrice}
            onChange={this.handleChange}
          />

          <button>🔍</button>
        </form>
      </section>
    )
  }
}
