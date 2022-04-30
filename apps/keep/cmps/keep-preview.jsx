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

  render() {
    const { subject, txt, id, file, backgroundColor, todoData } = this.props.keep
    const todos = Object.entries(todoData)
    const todosTxts = todos.map(item=>item[1].txt)
    return (
      <Link to={`/keep/${id}`}>
        <article className="keep-preview gallery-item" style={{ backgroundColor: backgroundColor }}>
          <h2>{subject}</h2>
          <h3>{txt}</h3>
          {todos &&
            (<div className="todo-container">
              Hello from todo
              <ul>
                {todosTxts.map(todo =>
                  <li key={todo}>{todo}</li>
                )}
              </ul>
            </div>)}
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
            <button onClick={(e) => this.onCopyKeep(e, id)}>
              <i className="fa fa-clipboard"></i>
            </button>
            <button onClick={(e) => this.onPinKeep(e, id)}>
              <i className="fa fa-map-pin"></i>
            </button>
          </div>
        </article>
      </Link>
    )
  }
}
