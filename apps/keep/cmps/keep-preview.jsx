const { Link } = ReactRouterDOM
export function EmailPreview({ keep }) {
    return (
        <Link to={`/keep/${keep.id}`}>
            <article className="keep-preview">
                <h2>{keep.subject}</h2>
                <h3>{keep.txt}</h3>
                {(keep.file) && <div className="attachment-container">
                    <span className="attachment-span">
                        {(keep.file.contains('.jpg', '.gif')) && <img src="./assets/imgs/attachment.png" />}
                        {(keep.file.contains('.mp4')) && <video width="320" height="240" controls>
                            <source src={keep.file} type="video/mp4"></source>
                        </video>}
                        {(keep.file.contains('.mp3', '.wav')) && <audio controls>
                            <source src={keep.file} type="audio/mpeg"></source>
                            Your browser does not support the audio...
                        </audio>}
                        <span>{keep.file.slice(46)}</span>
                    </span>
                </div>}
            </article>
        </Link>
    )
}
