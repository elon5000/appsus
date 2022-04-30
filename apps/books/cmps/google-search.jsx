import { OptionPreview } from './option-preview.jsx'

export class GoogleSearch extends React.Component {
  state = {
    search:
      'https://www.googleapis.com/books/v1/volumes?printType=books&q=javescript',
    options: {},
  }

  handleSearchChange = ({ target }) => {
    const value = target.value
    this.setState(() => ({
      search: `https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`,
    }))
    fetch(this.state.search)
      .then((res) => res.json())
      .then((data) => this.getItems(data.items))
  }

  getItems(items) {
    this.setState({ options: items })
  }

  render() {
    const { options } = this.state.options
    return (
      <section>
        <input
          type="text"
          name="search"
          placeholder="Search Book"
          onChange={this.handleSearchChange}
        />
        {options &&
          options.map((option) => (
            <OptionPreview key={option.id} option={option} />
          ))}
      </section>
    )
  }
}
