import { emailService } from '../services/email-service.js'

const { Link } = ReactRouterDOM

export class EmailDetails extends React.Component {
  state = {
    email: null,
  }

  componentDidMount() {
    this.loadEmail()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
      this.loadEmail()
    }
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
    emailService.changeRead(this.state.email.id).then(this.loadEmail())
  }

  getSentDate = () => {
    const emailTime = this.state.email.sentAt
    const timeToString = new Date(emailTime)
    let time = timeToString.toLocaleString()
    return time
  }

  render() {
    const { email } = this.state
    if (!email) return <div>Loading...</div>
    const nextEmailId = emailService.getMoreEmailId(email.id, true)
    const backEmailId = emailService.getMoreEmailId(email.id, false)
    const changeToForm = email.status === 'inbox' ? email.from : email.to
    const dateFromNow = this.getSentDate()
    return (
      <section className="email-details">
        <div className="details-row flex">
          <div className="details-row-btns flex">
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
            <button>
              <i className="fa fa-bookmark"></i>
            </button>
            <button>
              <i className="fa fa-star"></i>
            </button>
          </div>
          <div className="details-row-btns flex">
            <Link to={`/email/${backEmailId}`}>
              <button>
                <i className="fa-solid fa-backward"></i>
              </button>
            </Link>
            <Link to={`/email/${nextEmailId}`}>
              <button onClick={this.onGoNextEmail}>
                <i className="fa-solid fa-forward"></i>
              </button>
            </Link>
          </div>
        </div>
        <main className="details-top flex column">
          <div className="flex align-center details-subject">
            <h2>{email.subject}</h2>
            <div className="">{dateFromNow}</div>
          </div>
          <h3> {`<${changeToForm.email}>`} </h3>
          <h3>{changeToForm.fullName}</h3>
          <div className="details-cotent">{email.body}</div>
        </main>
      </section>
    )
  }
}
