export class EmailSideSorts extends React.Component {
  state = {
    sortBy: {
      sortBy: 'inbox',
    },
  }

  onSort = ({ target }) => {
    const name = target.name
    this.setState({ sortBy: { sortBy: name } }, () => {
      this.props.onSetSort(this.state.sortBy)
    })
  }

  render() {
    const active = this.state.sortBy.sortBy
    return (
      <section className="email-side-sorts flex column">
        <div className="side-btn-wrapper">
          <button name="inbox" onClick={this.onSort} className="side-active">
            <i className="fa fa-inbox"></i>
            <span>Inbox</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button name="starred" onClick={this.onSort}>
            <i className="fa fa-star"></i>
            <span>Starred</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button name="sent" onClick={this.onSort}>
            <i className="fa fa-paper-plane"></i>
            <span>Sent</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button name="draft" onClick={this.onSort}>
            <i className="fa fa-file"></i>
            <span>Drafts</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button name="labels" onClick={this.onSort}>
            <i className="fa fa-bookmark"></i>
            <span>Labels</span>
          </button>
        </div>
      </section>
    )
  }
}
