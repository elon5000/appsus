const { Link } = ReactRouterDOM
export class KeepPreview extends React.Component {
  onDeleteKeep = (e, id) => {
    e.preventDefault()
    this.props.onDeleteKeep(id)
  }

  onCopyKeep = (e, id) => {
    e.preventDefault()
    this.props.onCopyKeep(id)
  }

  onPinKeep = (e, id) => {
    e.preventDefault()
    this.props.onPinKeep(id)
  }

  onSendAsEmail = (e, id) => {
    e.preventDefault()
    this.props.onSendAsEmail(id)
  }

  render() {
    const { subject, txt, id, file, backgroundColor, todoData } =
      this.props.keep
    const todoArr = Object.values(todoData)
    return (
      <Link to={`/keep/edit/${id}`}>
        <article
          className="keep-preview gallery-item"
          style={{ backgroundColor: backgroundColor }}
        >
          <h2>{subject}</h2>
          <h3>{txt}</h3>
          {todoArr && (
            <div className="todo-container">
              <ul>
                {todoArr.map((todo) => (
                  <li
                    key={todo[0]}
                    className={todo[2] ? 'marked' : ''}>
                    {todo[1]}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          <div className="keep-btn">
            <button onClick={(e) => this.onDeleteKeep(e, id)}>
              <i className="fa fa-trash"></i>
            </button>
            <button onClick={(e) => this.onCopyKeep(e, id)}>
              <i className="fa fa-clipboard"></i>
            </button>
            <button onClick={(e) => this.onPinKeep(e, id)}>
              <i className="fa fa-map-pin"></i>
            </button>
            <button onClick={(e) => this.onSendAsEmail(e, id)}>
              <i className="fa-solid fa-envelope"></i>
            </button>
          </div>
        </article>
      </Link>
    )
  }
}
