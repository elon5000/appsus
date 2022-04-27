const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {
  return (
    <Link to={`/email/${email.id}`}>
      <article className="email-preview">
        <h3>{email.to}</h3>
        <h4>Subject : {email.subject}</h4>
        <h5>Content : {email.body}</h5>
        <div className="attachment-container">
          {(email.file) && <span className="attachment-span">
            <img src="./assets/imgs/attachment.png" />
            <span>{email.file.slice(46)}</span>
          </span>}
        </div>
      </article>
    </Link>
  )
}
