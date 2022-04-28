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
    this.setState({ sortBy }, this.loadEmails())
  }

  render() {
    const { emails } = this.state
    return (
      <section className="email-index">
        <EmailFilter onSetSort={this.onSetSort} hidden={this.props.history} />
        <EmailList emails={emails} onSelectEmail={this.onSelectEmail} />
      </section>
    )
  }
}
