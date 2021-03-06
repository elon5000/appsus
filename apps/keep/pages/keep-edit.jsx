import { keepService } from '../services/keep-service.js'
import { uploadService } from '../../../services/upload.service.js'
// import { KeepRecorder } from '../cmps/keep-recorder.jsx'
import { KeepTodo } from '../cmps/keep-todo.jsx'

export class KeepEdit extends React.Component {
  state = {
    keep: {
      type: '',
      subject: '',
      txt: '',
      file: '',
      backgroundColor: '',
      todoData: '',
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
      uploadService.readURL(target.files).then((uploadedFile) =>
        this.setState((prevState) => ({
          keep: { ...prevState.keep, file: uploadedFile },
        }))
      )
    }
    this.setState((prevState) => ({
      keep: { ...prevState.keep, [field]: val },
    }))
  }

  onSaveKeep = (ev) => {
    ev.preventDefault()
    keepService.saveKeep(this.state.keep).then(() => {
      this.props.history.push('/keep')
    })
  }

  onSaveTodo = (todos) => {
    this.setState((prevState) => ({
      keep: { ...prevState.keep, todoData: todos },
    }))
    console.log(todos)
  }

  onSetColor = (val) => {
    this.setState({ keep: { backgroundColor: val } })
  }

  render() {
    const { subject, txt, file, backgroundColor } = this.state.keep
    return (
      <section className="keep-edit">
        <h2>Edit keep</h2>
        <form className="keep-form" onSubmit={this.onSaveKeep}>
          <input
            className="subject-input"
            type="text"
            name="subject"
            onChange={this.handleChange}
            placeholder="title"
            value={subject}
          />
          <textarea
            className="text-input"
            type="text"
            name="txt"
            onChange={this.handleChange}
            placeholder="text"
            value={txt}
          />
          {/* <KeepRecorder /> */}
          <input
            type="color"
            className="color-input"
            name="backgroundColor"
            onChange={this.handleChange}
          />
          <input
            type="file"
            name="file"
            className="file-input"
            onChange={this.handleChange} />
          <button className="save-btn" type="submit">save</button>
        </form>
          <KeepTodo onSaveTodo={this.onSaveTodo} />
      </section>
    )
  }
}
