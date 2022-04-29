const { Link } = ReactRouterDOM
export function KeepPreview({ keep }) {
  return (
    <Link to={`/keep/${keep.id}`}>
      <article className="keep-preview">
        <h2>{keep.subject}</h2>
        <h3>{keep.txt}</h3>
        {keep.file && (
          <div className="file-container">
            <span className="file-span">
              {keep.file.includes('image') && <img src={keep.file} />}
              {keep.file.includes('video') && (
                <video width="320" height="240" controls>
                  <source src={keep.file} type="video/mp4"></source>
                </video>
              )}
              {keep.file.includes('audio') && (
                <audio controls>
                  <source src={keep.file} type="audio/mpeg"></source>
                </audio>
              )}
            </span>
          </div>
        )}
      </article>
    </Link>
  )
}
