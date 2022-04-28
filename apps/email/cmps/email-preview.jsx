const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {
  render() {
    const { id, to, subject, body, file, isRead } = this.props.email
    const grayBg = isRead ? '#F2F2F2' : 'white'
    return (
      <Link to={`/email/${id}`}>
        <article className="email-preview" style={{ backgroundColor: grayBg }}>
          <div className="email-options-right">
            <button>
              <i className="fa fa-star"></i>
            </button>
            <button>
              <i className="fa fa-tag"></i>
            </button>
          </div>
          <h2>{to.fullName}</h2>
          <h2>{to.email}</h2>
          <h3>Subject : {subject}</h3>
          <h4>{body}</h4>
          {file && (
            <div className="attachment-container">
              <span className="attachment-span">
                <img src="./assets/imgs/attachment.png" />
                <span>{file.slice(46)}</span>
              </span>
            </div>
          )}
          <div className="email-options-right">
            <button>
              <i className="fa fa-trash"></i>
            </button>
            {(isRead && (
              <button>
                <i className="fa fa-envelope-open"></i>
              </button>
            )) || (
              <button>
                <i className="fa fa-envelope"></i>
              </button>
            )}
          </div>
        </article>
      </Link>
    )
  }
}
