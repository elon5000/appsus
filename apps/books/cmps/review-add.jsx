export class ReviewAdd extends React.Component {
  state = {
    review: {
      name: '',
      stars: '',
      date: '',
      review: '',
    },
  }

  onAddReview = (ev) => {
    ev.preventDefault()
    this.props.onSaveReview(this.state.review)
    this.setState({
      review: {
        name: '',
        stars: '',
        date: '',
        review: '',
      },
    })
  }

  handleChange = ({ target }) => {
    const value = target.value
    const stateKey = target.name
    this.setState((prevState) => ({
      review: { ...prevState.review, [stateKey]: value },
    }))
  }

  render() {
    const { name, stars, date, review } = this.state.review
    return (
      <section className="reviews">
        <h2>Please Enter Review</h2>
        <form
          onSubmit={this.onAddReview}
          className="form-review flex column align-center"
        >
          <input
            name="name"
            value={name}
            type="text"
            placeholder="Your name"
            onChange={this.handleChange}
          />
          <label htmlFor="stars">
            <select
              value={stars}
              name="stars"
              id="stars"
              onChange={this.handleChange}
            >
              <option value="0" hidden>
                Please select stars
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <input
            value={date}
            name="date"
            type="date"
            onChange={this.handleChange}
          />
          <textarea
            value={review}
            name="review"
            id="review"
            cols="20"
            rows="5"
            onChange={this.handleChange}
          ></textarea>
          <button>Save your review!</button>
        </form>
      </section>
    )
  }
}
