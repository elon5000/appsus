import { emailService } from '../services/email-service.js'

export class EmailEdit extends React.Component {
  state = {
    email: {},
  }
}

handleChange = ({ target }) => {
  const field = target.name
  const value = target.value
  this.setState((prevState) => ({
    email: { ...prevState.email, [field]: value },
  }))

  onSaveEmail = (ev) => {
    ev.preventDefault()
    emailService.saveEmail(this.state.email).then(() => {
      this.props.history.push('/email')
    })
  }
}
