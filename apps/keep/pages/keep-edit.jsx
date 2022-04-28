import { keepService } from '../services/keep-service.js'

export class EmailEdit extends React.Component {
    state = {
        keep: {
            type: '',
            subject: '',
            txt: '',
            file: '',
            backgroundColor: ''
        },
    }

    // componentDidMount() {
    //     if (this.timeoutId) clearTimeout(this.timeoutId)
    //     this.timeoutId = setTimeout(this.onSaveDraft, 5000)
    // }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            keep: { ...prevState.keep, [field]: value },
        }))
    }

    onSaveKeep = (ev) => {
        ev.preventDefault()
        keepService.saveKeep(this.state.keep).then(() => {
            this.props.keeps.push('/keep')
        })
    }

    render() {
        const { subject, txt, file, backgroundColor } = this.state.email
        return (
            <section className="keep-edit flex column align-center">
                <h2>Edit keep</h2>
                <form className="keep-form" onSubmit={this.onSaveKeep}>
                    <input
                        type="text"
                        name="subject"
                        onChange={this.handleChange}
                        placeholder="Title"
                        value={title}
                    />
                    <input
                        type="text"
                        name="txt"
                        onChange={this.handleChange}
                        placeholder="Write your text"
                        value={txt}
                    />
                    <input
                        type="file"
                        name="file-upload"
                        onChange={this.handleChange}
                        value={file}
                    />
                    <input
                        type="color"
                        name="background-color"
                        onChange={this.handleChange}
                        value={backgroundColor}
                    />
                    <button>Submit</button>
                </form>
            </section>
        )
    }
}