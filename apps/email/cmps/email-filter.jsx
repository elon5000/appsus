const { Link } = ReactRouterDOM

export class EmailFilter extends React.Component {
  state = {
    sortBy: 'inbox',
  }

  render() {
    return (
      <section className="email-filter">
        <div className="compose-wrapper">
          <Link to="/email/edit">
            <div className="plus-wrapper">
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </div>
            <div>
              <span>Compose</span>
            </div>
          </Link>
        </div>
        <div className="sidebar-email-filters flex column">
          <button name="inbox" onClick={this.onSort}>
            Inbox
            {/* <i className="fa fa-inbox"></i> */}
          </button>
          <button name="starred" onClick={this.onSort}>
            Starred
            {/* <i className="fa fa-star"></i> */}
          </button>
          <button name="sent" onClick={this.onSort}>
            Sent
            {/* <i className="fa fa-paper-plane"></i> */}
          </button>
          <button name="draft" onClick={this.onSort}>
            Drafts
            {/* <i className="fa fa-file"></i> */}
          </button>
          <button name="labels" onClick={this.onSort}>
            Labels
            {/* <i className="fa fa-tag"></i> */}
          </button>
        </div>
      </section>
    )
  }
}
