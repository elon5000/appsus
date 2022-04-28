import { emailService } from '../services/email-service.js'

export class EmailEdit extends React.Component {
  state = {
    email: {
      subject: '',
      body: '',
      to: '',
    },
  }

  timeoutId

  componentDidMount() {
    this.loadEmail()
    // if (this.timeoutId) clearTimeout(this.timeoutId)
    // this.timeoutId = setTimeout(this.onSaveDraft, 5000)
  }

  loadEmail = () => {
    console.log(this.props)
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
    this.setState((prevState) => ({
      email: { ...prevState.email, [field]: value },
    }))
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

  render() {
    const { subject, body, to, file } = this.state.email
    return (
      <section className="email-edit flex column align-center">
        <h2>Send new email</h2>
        <form className="email-form" onSubmit={this.onSaveEmail}>
          <input
            type="text"
            name="to"
            onChange={this.handleChange}
            placeholder="To:"
            value={to.email}
          />
          <input
            type="text"
            name="subject"
            onChange={this.handleChange}
            placeholder="Enter subject"
            value={subject}
          />
          <input
            type="text"
            name="body"
            onChange={this.handleChange}
            placeholder="Your text"
            value={body}
          />
          {/* <input
            type="text"
            name="file"
            onChange={this.handleChange}
            value={file}
          /> */}
          <button>Submit</button>
        </form>
      </section>
    )
  }
}
