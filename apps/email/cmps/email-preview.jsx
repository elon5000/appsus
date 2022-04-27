const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {
  return (
    <Link to={`/email/${email.id}`}>
      <article className="email-preview">
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
      </article>
    </Link>
  )
}
