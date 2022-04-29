const { Link } = ReactRouterDOM
export class KeepPreview extends React.Component {
  onDeleteKeep = (e, id) => {
    e.preventDefault()
    this.props.onDeleteKeep(id)
  }

  render() {
    const { subject, txt, id, file } = this.props.keep
    return (
      <Link to={`/keep/${id}`}>
        <article className="keep-preview">
          <h2>{subject}</h2>
          <h3>{txt}</h3>
          {file && (
            <div className="file-container">
              <span className="file-span">
                {file.includes('image') && <img src={file} />}
                {file.includes('video') && (
                  <video width="320" height="240" controls>
                    <source src={file} type="video/mp4"></source>
                  </video>
                )}
                {file.includes('audio') && (
                  <audio controls>
                    <source src={file} type="audio/mpeg"></source>
                  </audio>
                )}
              </span>
            </div>
          )}
          <div>
            <button onClick={(e) => this.onDeleteKeep(e, id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </article>
      </Link>
    )
  }
}
