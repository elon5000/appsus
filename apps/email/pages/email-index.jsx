import { EmailList } from '../cmps/email-list.jsx'
import { emailService } from '../services/email-service.js'

export class EmailIndex extends React.Component {
  state = {
    emails: [],
    filterBy: 'inbox',
  }

  componentDidMount() {
    this.loadEmails()
  }

  loadEmails = () => {
    emailService
      .query(this.state.filterBy)
      .then((emails) => this.setState({ emails }))
  }

  render() {
    const { emails } = this.state
    return (
      <section>
        <EmailList emails={emails} />
      </section>
    )
  }
}
