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
    emailService.removeEmail(this.state.email.id).then(this.onGoBack)
  }

  render() {
    const { email } = this.state
    if (!email) return <div>Loading...</div>
    return (
      <section className="email-details">
        <div className="details-top flex">
          <h2>{email.subject}</h2>
          <button>Favorite</button>
        </div>
        <div>
          <h3>{email.to.fullName}</h3>
        </div>
      </section>
    )
  }
}
