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
      <section className="email-filters">
        <form
          onSubmit={this.onFilter}
          className="form-filter flex align-center"
        >
          <label htmlFor="name" className="search-label flex align-center">
            <input
              type="text"
              placeholder="Search mail"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="email-filter-item"
            />
            <img
              className="search-icon-filter"
              src="../../../assets/imgs/search-icon.svg"
              alt=""
            />
          </label>
          {/* <input
            type="boolen"
            placeholder="Read"
            name="read"
            value={read}
            onChange={this.handleChange}
          /> */}
          {/* 
          <button>Submit</button> */}
        </form>
      </section>
    )
  }
}
