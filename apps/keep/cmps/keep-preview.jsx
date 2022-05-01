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
      <Link to={`/keep/edit/${id}`}
      className="keep-preview gallery-item"
      style={{ backgroundColor: backgroundColor }
     }>
          {file && (
            <div className="file-container">
                {file.includes('image') && <img src={file} />}
                {file.includes('video') && (
                  <video width="320" height="240" controls>
                    <source src={file} type="video/mp4"></source>
                  </video>
                )}
                {file.includes('audio') && (
                  <div className="audio-container">
                  <audio controls>
                    <source src={file} type="audio/mpeg"></source>
                  </audio>
                  </div>
                )}
            </div>
          )}
          <div className="text-container">
          <h2>{subject}</h2>
          <h3>{txt}</h3>
          {todoArr && (
            <div className="todo-container">
              <ul>
                {todoArr.map((todo) => (
                  <li
                    key={todo[0]}
                    value={todo[2]}
                    className={todo[2] ? 'marked' : ''}>
                    {todo[1]}
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
          <div className="keep-btn">
            <div className="btn-flex">
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
          </div>
      </Link>
    )
  }
}
