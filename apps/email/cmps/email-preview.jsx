const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {
  return (
    <Link to={`/email/${email.id}`}>
      <article className="email-preview">
        <h3>From : {email.to}</h3>
        <h3>Subject : {email.subject}</h3>
        <h5>Content : {email.body}</h5>
        <div className="attachment-container">
        {(email.file) && <img src="./assets/imgs/attachment.png" /> }
        </div>
      </article>
    </Link>
  )
}
