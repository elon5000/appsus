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
      // if (this.state.email.isRead === false) {
      //   emailService.changeRead(this.state.email.id)
      //   this.loadEmail()
      // }
    })
  }

  onGoBack = () => {
    this.props.history.push('/email')
  }

  onRemoveEmail = () => {
    emailService.deleteEmail(this.state.email.id).then(this.onGoBack)
  }

  onChangeRead = () => {
    emailService.changeRead(this.state.email.id).then(this.loadEmail())
  }

  DateMinusNow = () => {
    const emailTime = this.state.email.sentAt
    const timeToString = new Date(emailTime).toString()
    return timeToString
  }

  render() {
    const { email } = this.state
    if (!email) return <div>Loading...</div>
    const changeToForm = email.status === 'inbox' ? email.from : email.to
    const dateFromNow = this.DateMinusNow()
    return (
      <section className="email-details">
        <div>
          <button onClick={this.onGoBack}>
            <i className="fa fa-arrow-left"></i>
          </button>
          <button onClick={this.onRemoveEmail}>
            <i className="fa fa-trash"></i>
          </button>
          {(email.isRead && (
            <button onClick={this.onChangeRead}>
              <i className="fa fa-envelope-open"></i>
            </button>
          )) || (
            <button onClick={this.onChangeRead}>
              <i className="fa fa-envelope"></i>
            </button>
          )}
        </div>
        <div className="details-top flex">
          <h2 className="details-subject">{email.subject}</h2>
          <button>
            <i className="fa fa-tag"></i>
          </button>
        </div>
        <div className="details-from flex space-between align-center">
          <div className="details-from-left">
            <h3>
              {changeToForm.fullName} {`<${changeToForm.email}>`}
            </h3>
          </div>
          <div className="details-from-right flex">
            {dateFromNow}
            <button>
              <i className="fa fa-star"></i>
            </button>
          </div>
        </div>
        <div className="details-cotent">{email.body}</div>
      </section>
    )
  }
}
