import { emailService } from '../services/email-service.js'

const { Link } = ReactRouterDOM

export class EmailEdit extends React.Component {
  state = {
    email: {
      subject: '',
      body: '',
      to: {
        fullName: '',
        email: ',',
      },
    },
  }

  timeoutId

  componentDidMount() {
    this.loadEmail()
    // if (this.timeoutId) clearTimeout(this.timeoutId)
    // this.timeoutId = setTimeout(this.onSaveDraft, 5000)
  }

  loadEmail = () => {
    const { emailId } = this.props.match.params
    if (!emailId) return
    emailService.getById(emailId).then((email) => {
      this.setState({ email })
    })
    console.log(this.state.email)
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === 'email' || field === 'fullName') {
      this.setState((prevState) => ({
        email: {
          ...prevState.email,
          to: {
            ...prevState.email.to,
            [field]: value,
          },
        },
      }))
    } else {
      this.setState((prevState) => ({
        email: { ...prevState.email, [field]: value },
      }))
    }
  }

  onSaveEmail = (ev) => {
    ev.preventDefault()
    emailService.saveEmail(this.state.email).then(() => {
      this.props.history.push('/email?sent=')
    })
  }

  onSaveDraft() {
    emailService.saveDraft(this.state.email)
    clearTimeout(this.timeoutId)
  }

  onRemoveDraft() {
    if (this.state.email) emailService.removeDraft(this.state.email)
  }

  render() {
    const { subject, body, to, file } = this.state.email
    const checkTo = to.email ? to.email : 'Enter-Address@gmail.com'
    return (
      <section className="email-edit flex column align-center">
        <div className="email-edit-header flex">
          <h2>New Message</h2>
          <div>
            <Link to="/email">
              <i className="fa-solid fa-x"></i>
            </Link>
          </div>
        </div>
        <form className="email-form flex column" onSubmit={this.onSaveEmail}>
          <input
            type="text"
            name="fullName"
            onChange={this.handleChange}
            placeholder="Enter Name"
            value={to.fullName}
          />
          {(to.fullName && (
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={to.email}
            />
          )) || (
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="To email"
            />
          )}
          <input
            type="text"
            name="subject"
            onChange={this.handleChange}
            placeholder="Subject"
            value={subject}
          />
          <textarea
            name="body"
            onChange={this.handleChange}
            placeholder="Content"
            value={body}
          />
          {/* <input
            type="text"
            name="file"
            onChange={this.handleChange}
            value={file}
          /> */}
        </form>
        <button onClick={this.onSaveEmail} className="form-btn">
          Send
        </button>
        <button className="edit-delete" onClick={this.removeDraft}>
          <i className="fa fa-trash"></i>
        </button>
      </section>
    )
  }
}
