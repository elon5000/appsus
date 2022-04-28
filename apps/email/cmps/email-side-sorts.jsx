export class EmailSideSorts extends React.Component {
  onSort = ({ target }) => {
    const name = target.name
    this.props.onSetSort(name)
  }

  render() {
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
            <i class="fa fa-bookmark"></i>
            <span>Labels</span>
          </button>
        </div>
      </section>
    )
  }
}
