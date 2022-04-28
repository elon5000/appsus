export class EmailFilter extends React.Component {
  state = {
    filterBy: {
      name: '',
      read: '',
    },
  }

  handleChange = ({ target }) => {
    const value = target.value
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
    const { name, read } = this.state.filterBy
    return (
      <section className="email-filter">
        <form
          onSubmit={this.onFilter}
          className="form-filter flex align-center"
        >
          <input
            type="text"
            placeholder="Search"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <input
            type="boolen"
            placeholder="Read"
            name="read"
            value={read}
            onChange={this.handleChange}
          />

          <button>Submit</button>
        </form>
      </section>
    )
  }
}
