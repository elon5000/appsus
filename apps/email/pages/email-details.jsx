import { emailService } from '../services/email-service.js'

export class EmailDetails extends React.Component {
  state = {
    email: null,
  }

  componentDidMount() {
    this.loadEmail()
  }

  loadEmail = () => {
    const { emailId } = this.props.match.params
    emailService.getById(emailId).then((email) => {
      if (!email) return this.onGoBack()
      this.setState({ email })
    })
  }

  onGoBack = () => {
    this.props.history.push('/email')
  }

  onRemoveEmail = () => {
    emailService.deleteEmail(this.state.email.id).then(this.onGoBack)
  }
  onChangeRead = () => {
    emailService.changeRead(this.state.state).then(this.loadEmail)
  }

  render() {
    const { email } = this.state
    if (!email) return <div>Loading...</div>
    return (
      <section className="email-details">
        <div>
          <button onClick={this.onGoBack}>Back</button>
          <button onClick={this.onRemoveEmail}>Remove Email</button>
          <button onClick={this.onChangeRead}>Change Read</button>
          <button>Favorite</button>
        </div>
        <div className="details-top flex">
          <h2 className="details-subject">{email.subject}</h2>
          <button>Label</button>
        </div>
        <div>
          <h3>{email.to.fullName}</h3>
        </div>
      </section>
    )
  }
}
