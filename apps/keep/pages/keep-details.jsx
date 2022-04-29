import { keepService } from '../services/keep-service.js'

const { Link } = ReactRouterDOM

export class KeepDetails extends React.Component {
  state = {
    keep: null,
  }

  componentDidMount() {
    this.loadKeep()
  }

  loadKeep = () => {
    const { keepId } = this.props.match.params
    keepService.getById(keepId).then((keep) => {
      if (!keep) return this.onGoBack()
      this.setState({ keep })
    })
  }

  onGoBack = () => {
    this.props.history.push('/keep')
  }

  onRemoveKeep = () => {
    keepService.removeKeep(this.state.keep.id).then(this.onGoBack)
  }

  render() {
    const { keep } = this.state
    if (!keep) return <div>Loading...</div>
    return (
      <section className="keep-details">
        <article className="keep-preview">
          <h2>{keep.subject}</h2>
          <h3>{keep.txt}</h3>
          {keep.file && (
            <div className="file-container">
              <span className="file-span">
                {keep.file.includes('.jpg', '.gif') && <img src={keep.file} />}
                {keep.file.includes('.mp4') && (
                  <video width="320" height="240" controls>
                    <source src={keep.file} type="video/mp4"></source>
                  </video>
                )}
                {keep.file.includes('.mp3', '.wav') && (
                  <audio controls>
                    <source src={keep.file} type="audio/mpeg"></source>
                    Your browser does not support the audio...
                  </audio>
                )}
              </span>
            </div>
          )}
        </article>
        <div>
          <button onClick={this.onRemoveKeep}>Delete</button>
          <Link to={`/keep/edit/${keep.id}`}>
            <button>Go Update</button>
          </Link>
        </div>
      </section>
    )
  }
}
