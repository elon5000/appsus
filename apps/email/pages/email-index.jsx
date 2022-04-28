import { EmailCompose } from '../cmps/email-compose.jsx'
import { EmailCounter } from '../cmps/email-counter.jsx'
import { EmailSideSorts } from '../cmps/email-side-sorts.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { emailService } from '../services/email-service.js'
import { EmailFilter } from '../cmps/email-filter.jsx'

export class EmailIndex extends React.Component {
  state = {
    emails: [],
    sortBy: 'inbox',
    filterBy: null,
  }

  componentDidMount() {
    this.loadEmails()
  }

  componentDidUpdate() {
    // const urlSrcPrm = new URLSearchParams(this.props.location.search)
    // let paramObj = {}
    // for (var value of urlSrcPrm.keys()) {
    //   paramObj[value] = urlSrcPrm.get(value)
    // }
    // if (!Object.keys(paramObj)) paramObj = null
    // console.log(paramObj)
    // this.setState(
    //   (prevState) => ({ ...prevState, sortBy: paramObj }),
    //   () => {
    //     this.loadEmails()
    //   }
    // )
    // loadEmails()
  }

  loadEmails = () => {
    emailService
      .query(this.state.sortBy, this.state.filterBy)
      .then((emails) => this.setState({ emails }))
  }

  onSetSort = (sortBy) => {
    this.setState({ sortBy }, this.loadEmails)

    const urlSrcPrm = new URLSearchParams(sortBy)
    const searchStr = urlSrcPrm.toString()
    console.log(searchStr)
    this.props.history.push(`/email?${searchStr}`)
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadEmails())
    const urlSrcPrm = new URLSearchParams(filterBy)
    const searchStr = urlSrcPrm.toString()
    this.props.history.push(`/email?${this.state.sortBy}=&${searchStr}`)
  }

  get emailsToDisplay() {
    const { emails } = this.state
    const urlSrcPrm = new URLSearchParams(this.props.location)
    console.log('check')

    const etg = urlSrcPrm.get('etg')
    if (!etg) return emails
    return emails.filter((email) => email.subject === etg)
  }

  render() {
    const { emails } = this.state
    if (!emails) return <div>Loading..</div>
    const checkInbox = this.state.filterBy === 'inbox' ? true : false
    return (
      <section className="email-index">
        <div className="sidebar">
          {checkInbox && <EmailCounter emails={emails} />}
          <EmailCompose />
          <EmailSideSorts
            onSetSort={this.onSetSort}
            history={this.props.history}
          />
        </div>
        <div>
          <EmailFilter
            onSetFilter={this.onSetFilter}
            history={this.props.history}
          />
          <EmailList emails={emails} onSelectEmail={this.onSelectEmail} />
        </div>
      </section>
    )
  }
}
