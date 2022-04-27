const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {
  return (
    <Link to={`/email/${email.id}`}>
      <article className="email-preview">
        <div className="email-options-right">
          <button>Favorite</button>
          <button>Label</button>
        </div>
        <h2>{email.to.fullName}</h2>
        <h2>{email.to.email}</h2>
        <h3>Subject : {email.subject}</h3>
        <h4>{email.body}</h4>
        {email.file && (
          <div className="attachment-container">
            <span className="attachment-span">
              <img src="./assets/imgs/attachment.png" />
              <span>{email.file.slice(46)}</span>
            </span>
          </div>
        )}
        <div className="email-options-right">
          <button>Delete</button>
          <button>Mark as Read</button>
        </div>
      </article>
    </Link>
  )
}
