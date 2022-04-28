import { EmailCompose } from '../cmps/email-compose.jsx'
import { EmailCounter } from '../cmps/email-counter.jsx'
import { EmailFilter } from '../cmps/email-filter.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { emailService } from '../services/email-service.js'

export class EmailIndex extends React.Component {
  state = {
    emails: [],
    sortBy: '',
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

  render() {
    const { emails } = this.state
    return (
      <section className="email-index">
        <div className="sidebar">
          <EmailCompose />
          <EmailFilter
            onSetSort={this.onSetSort}
            history={this.props.history}
          />
          <EmailCounter emails={emails} />
        </div>
        <div>
          <EmailList emails={emails} onSelectEmail={this.onSelectEmail} />
        </div>
      </section>
    )
  }
}
