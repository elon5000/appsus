import { keepService } from '../apps/keep/services/keep-service.js'
import { emailService } from '../apps/email/services/email-service.js'

export class AppHome extends React.Component {
  state = {
    emails: {},
    keeps: {},
  }

  componentDidMount() {
    this.loadEmails()
    this.loadKeeps()
  }

  loadEmails = () => {
    emailService
      .query()
      .then((emails) =>
        this.setState((prevState) => ({ ...prevState, emails }))
      )
  }

  loadKeeps = () => {
    keepService
      .query()
      .then((keeps) => this.setState((prevState) => ({ ...prevState, keeps })))
  }

  render() {
    return <section className='homepage-container'><h1 className='welcome-text'> Welcome to Apsus </h1>
      <div className='background-image'>
        <div className='background-padding'></div>
      </div>
    </section>
  }
}
