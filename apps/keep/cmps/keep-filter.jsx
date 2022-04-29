export class KeepFilter extends React.Component {
  state = {
    filterBy: {
      name: '',
    },
  }

  handleChange = ({ target }) => {
    // target.preventDefault()
    const field = target.name
    const value = target.value
    console.log(field, value)
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
    return (
      <section className="email-filters">
        <form
          onSubmit={this.onFilter}
          className="form-filter flex align-center"
        >
          <label htmlFor="name" className="search-label flex align-center">
            <input
              type="text"
              placeholder="Search keep"
              name="name"
              onChange={this.handleChange}
              className="email-filter-item"
            />
            <img
              onClick={this.onFilter}
              className="search-icon-filter"
              src="../../../assets/imgs/search-icon.svg"
              alt=""
            />
          </label>
        </form>
      </section>
    )
  }
}
