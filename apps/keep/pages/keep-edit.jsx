import { keepService } from '../services/keep-service.js'

export class KeepEdit extends React.Component {
  state = {
    keep: {
      type: '',
      subject: '',
      txt: '',
      file: '',
      backgroundColor: '',
    },
  }

  componentDidMount() {
    console.log(this.props)
    this.loadKeep()
  }

  loadKeep = () => {
    const { keepId } = this.props.match.params
    console.log(keepId)
    if (!keepId) return
    keepService.getById(keepId).then((keep) => this.setState({ keep }))
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    if (field === 'file') this.handlefile(value)
    this.setState((prevState) => ({
      keep: { ...prevState.keep, [field]: value },
    }))
  }

  onSaveKeep = (ev) => {
    ev.preventDefault()
    keepService.saveKeep(this.state.keep).then(() => {
      this.props.history.push('/keep')
    })
  }

  render() {
    const { subject, txt, file, backgroundColor } = this.state.keep
    return (
      <section className="keep-edit flex column align-center">
        <h2>Edit keep</h2>
        <form className="keep-form" onSubmit={this.onSaveKeep}>
          <input
            type="text"
            name="subject"
            onChange={this.handleChange}
            placeholder="title"
            value={subject}
          />
          <input
            type="text"
            name="txt"
            onChange={this.handleChange}
            placeholder="note"
            value={txt}
          />
          <input
            type="file"
            name="file"
            onChange={this.handleChange}
            value={file}
          />
          <input
            type="color"
            name="backgroundColor"
            onChange={this.handleChange}
            placeholder="white"
            value={backgroundColor}
          />
          <button type='submit'>save!</button>
        </form>
      </section>
    )
  }
}
