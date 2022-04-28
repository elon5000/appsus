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

  DateMinusNow = () => {
    const emailTime = this.state.email.sentAt
    const timeToString = new Date(emailTime).toString()
    return timeToString
  }

  render() {
    const { email } = this.state
    if (!email) return <div>Loading...</div>
    const dateFromNow = this.DateMinusNow()
    return (
      <section className="email-details">
        <div>
          <button onClick={this.onGoBack}>
            <i class="fa fa-arrow-left"></i>
          </button>
          <button onClick={this.onRemoveEmail}>
            <i class="fa fa-trash"></i>
          </button>
          {(email.isRead && (
            <button onClick={this.onChangeRead}>
              <i class="fa fa-envelope-open"></i>
            </button>
          )) || (
            <button onClick={this.onChangeRead}>
              <i class="fa fa-envelope"></i>
            </button>
          )}
        </div>
        <div className="details-top flex">
          <h2 className="details-subject">{email.subject}</h2>
          <button>
            <i class="fa fa-tag"></i>
          </button>
        </div>
        <div className="details-from flex space-between align-center">
          <div className="details-from-left">
            <h3>
              {email.from.fullName} {`<${email.from.email}>`}
            </h3>
          </div>
          <div className="details-from-right flex">
            {dateFromNow}
            <button>
              <i class="fa fa-star"></i>
            </button>
          </div>
        </div>
        <div className="details-cotent">{email.body}</div>
      </section>
    )
  }
}
