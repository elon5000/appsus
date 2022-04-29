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
    return (
      <section className="email-side-sorts flex column">
        <div className="side-btn-wrapper">
          <button
            name="inbox"
            onClick={this.onSort}
            className={
              this.state.sortBy.sortBy === 'inbox' ? 'side-active' : null
            }
          >
            <i className="fa fa-inbox"></i>
            <span>Inbox</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button
            name="starred"
            onClick={this.onSort}
            className={
              this.state.sortBy.sortBy === 'starred' ? 'side-active' : null
            }
          >
            <i className="fa fa-star"></i>
            <span>Starred</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button
            name="sent"
            onClick={this.onSort}
            className={
              this.state.sortBy.sortBy === 'sent' ? 'side-active' : null
            }
          >
            <i className="fa fa-paper-plane"></i>
            <span>Sent</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button
            name="draft"
            onClick={this.onSort}
            className={
              this.state.sortBy.sortBy === 'draft' ? 'side-active' : null
            }
          >
            <i className="fa fa-file"></i>
            <span>Drafts</span>
          </button>
        </div>
        <div className="side-btn-wrapper">
          <button
            name="labels"
            onClick={this.onSort}
            className={
              this.state.sortBy.sortBy === 'labels' ? 'side-active' : null
            }
          >
            <i className="fa fa-bookmark"></i>
            <span>Labels</span>
          </button>
        </div>
      </section>
    )
  }
}
