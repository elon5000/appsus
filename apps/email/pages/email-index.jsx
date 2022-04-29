import { EmailCompose } from '../cmps/email-compose.jsx'
import { EmailCounter } from '../cmps/email-counter.jsx'
import { EmailSideSorts } from '../cmps/email-side-sorts.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { emailService } from '../services/email-service.js'
import { EmailFilter } from '../cmps/email-filter.jsx'

export class EmailIndex extends React.Component {
  state = {
    emails: [],
    sortBy: {
      sortBy: 'inbox',
    },
    filterBy: 'all',
  }

  componentDidMount() {
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    let paramObj = {}
    for (var value of urlSrcPrm.keys()) {
      paramObj[value] = urlSrcPrm.get(value)
    }
    if (!Object.keys(paramObj)) paramObj = null
    this.setState(
      (prevState) => ({ ...prevState, filterBy: paramObj }),
      () => {
        this.loadEmails()
      }
    )
  }

  loadEmails = () => {
    emailService.query().then((emails) => this.setState({ emails }))
  }

  onDeleteEmail = (id) => {
    emailService.deleteEmail(id).then((emails) => this.setState({ emails }))
  }

  onMarkEmail = (id) => {
    emailService.changeRead(id).then((emails) => this.setState({ emails }))
  }

  onSetSort = (sortBy) => {
    this.setState({ sortBy }, this.loadEmails)

    const urlSrcPrm = new URLSearchParams(sortBy)
    const searchStr = urlSrcPrm.toString()
    this.props.history.push(`/email?=&${searchStr}`)
    const sortUrl = `/email?=&${searchStr}`
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadEmails)
    const urlSrcPrm = new URLSearchParams(filterBy)
    const searchStr = urlSrcPrm.toString()
    this.props.history.push(
      `/email?=&sortBy=${this.state.sortBy.sortBy}&${searchStr}`
    )
  }

  get emailsToDisplay() {
    let { emails } = this.state
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    const sort = urlSrcPrm.get('sortBy')
    const name = urlSrcPrm.get('name')
    const show = urlSrcPrm.get('show')
    if (sort) {
      emails = emails.filter((email) => email.status === sort)
    } else {
      emails = emails.filter((email) => email.status === 'inbox')
    }
    if (name) {
      emails = emails.filter(
        (email) =>
          email.subject.toLowerCase().includes(name.toLowerCase()) ||
          email.from.fullName.toLowerCase().includes(name.toLowerCase())
      )
    }
    if (show) {
      if (show === 'readcheck') {
        emails = emails.filter((email) => email.isRead)
      } else if (show === 'unreadcheck') {
        emails = emails.filter((email) => !email.isRead)
      } else {
        emails = emails
      }
    }
    return emails
  }

  render() {
    const { emails } = this.state
    if (!emails) return <div>Loading..</div>
    const checkInbox = this.state.sortBy === 'inbox' ? true : false
    return (
      <section className="email-index flex">
        <div className="email-sidebar flex column">
          <EmailCompose />
          <EmailSideSorts
            onSetSort={this.onSetSort}
            location={this.props.location.search}
          />
          {checkInbox && <EmailCounter emails={emails} />}
        </div>
        <div className="email-main flex column">
          <EmailFilter
            onSetFilter={this.onSetFilter}
            history={this.props.history}
          />
          <EmailList
            emails={this.emailsToDisplay}
            onDeleteEmail={this.onDeleteEmail}
            onMarkEmail={this.onMarkEmail}
          />
        </div>
      </section>
    )
  }
}
