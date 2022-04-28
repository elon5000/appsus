import { EmailFilter } from '../cmps/email-filter.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { emailService } from '../services/email-service.js'

export class EmailIndex extends React.Component {
  state = {
    emails: [],
    sortBy: 'inbox',
  }

  componentDidMount() {
    this.loadEmails()
  }

  loadEmails = () => {
    console.log(this.state.sortBy)
    emailService
      .query(this.state.sortBy)
      .then((emails) => this.setState({ emails }))
  }

  onSetSort = (sortBy) => {
    this.setState({ sortBy: sortBy }, this.loadEmails())
  }

  RenderCounter = () => {
    const emails = this.state.emails
    if (!emails) return 0
    const unread = emails.filter(email => !email.isRead)
    console.log(unread)
    const counter = unread.length
    return counter
  }

  render() {
    const { emails } = this.state
    const unread = this.RenderCounter()
    return (
      <section className="email-index">
        <div className='unread-counter'>
          <h2>Unread: {unread}</h2>
        </div>
        <EmailFilter onSetSort={this.onSetSort} hidden={this.props.history} />
        <EmailList emails={emails} onSelectEmail={this.onSelectEmail} />
      </section>
    )
  }
}
