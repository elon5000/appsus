import { EmailCompose } from '../cmps/email-compose.jsx'
import { EmailCounter } from '../cmps/email-counter.jsx'
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
    this.setState({ sortBy }, this.loadEmails)

    const urlSrcPrm = new URLSearchParams(sortBy)
    const searchStr = urlSrcPrm.toString()
    this.props.history.push(`/email?${searchStr}`)
  }

  get emailsToDisplay() {
    const { emails } = this.state
    const urlSrcPrm = new URLSearchParams(this.props.location)

    const etg = urlSrcPrm.get('etg')
    if (!etg) return emails
    return emails.filter((email) => email.category === etg)
  }

  RenderCounter = () => {
    const emails = this.state.emails
    if (!emails) return 0
    const unread = emails.filter((email) => !email.isRead)
    console.log(unread)
    const counter = unread.length
    return counter
  }

  render() {
    const { emails } = this.state
    const unread = this.RenderCounter()
    return (
      <section className="email-index">
        <div className="unread-counter">
          <h2>Unread: {unread}</h2>
        </div>
        <div className="sidebar">
          <EmailCompose />
          <EmailFilter
            onSetSort={this.onSetSort}
            history={this.props.history}
          />
          <EmailCounter email={emails} />
        </div>
        <div>
          <EmailList emails={emails} onSelectEmail={this.onSelectEmail} />
        </div>
      </section>
    )
  }
}
