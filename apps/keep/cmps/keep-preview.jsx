const { Link } = ReactRouterDOM
export function EmailPreview({ keep }) {
  return (
    <Link to={`/keep/${keep.id}`}>
      <article className="keep-preview">
        <h2>{keep.to}</h2>
        <h3>Subject : {keep.subject}</h3>
        <h4>{keep.body}</h4>
        {(keep.file) && <div className="attachment-container">
          <span className="attachment-span">
            <img src="./assets/imgs/attachment.png" />
            <span>{keep.file.slice(46)}</span>
          </span>
        </div>}
      </article>
    </Link>
  )
}
