import { EmailList } from '../cmps/email-list.jsx'
import { emailService } from '../services/email-service.js'

const { Link } = ReactRouterDOM

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
      <section className="email-index">
        <Link to="/email/edit">
          <button>Compose</button>
        </Link>
        <EmailList emails={emails} onSelectEmail={this.onSelectEmail} />
      </section>
    )
  }
}
