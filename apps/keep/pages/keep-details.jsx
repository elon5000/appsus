import { emailService } from '../services/email-service.js'

export class EmailDetails extends React.Component {
  state = {
    email: null,
  }

  componentDidMount() {
    this.loadEmail()
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
        <div className="details-top flex">
          <div className="details-subject">
            <h2>{keep.subject}</h2>
          </div>
          <div className="details-favorite-btn">
            <button>Pin</button>
          </div>
        </div>
        <div>
          <h3>{keep.to.fullName}</h3>
        </div>
      </section>
    )
  }
}