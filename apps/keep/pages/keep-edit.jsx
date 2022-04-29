import { keepService } from '../services/keep-service.js'
import { uploadService } from '../../../services/upload.service.js'
import { KeepRecorder } from '../cmps/keep-recorder.jsx'
import { ColorInput } from '../cmps/color-input.jsx'

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
    this.loadKeep()
  }

  loadKeep = () => {
    const { keepId } = this.props.match.params
    if (!keepId) return
    keepService.getById(keepId).then((keep) => this.setState({ keep }))
  }

  handleChange = ({ target }) => {
    const field = target.name
    const val = target.value
    if (field === 'file') {
      uploadService
        .readURL(target.files)
        .then((uploadedFile) => this.setState((prevState) => ({
          keep: { ...prevState.keep, file: uploadedFile },
        })))
    }
    this.setState((prevState) => ({
      keep: { ...prevState.keep, [field]: val },
    }))
  }

  onSaveKeep = (color) => {
    this.setState((prevState) => ({
      keep: { ...prevState.keep, backgroundColor: color },
    }))
  }

  onColorChange = (field, value) => {
    this.setState((prevState) => ({ backgroundColor: { ...prevState.backgroundColor, [field]: value } }))
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
          />
          <KeepRecorder />
          <ColorInput onColorChange={this.onColorChange} />
          <button type='submit'>save!</button>
        </form>
      </section>
    )
  }
}
