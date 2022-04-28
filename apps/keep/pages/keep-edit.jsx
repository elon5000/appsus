import { keepService } from '../services/keep.service.js'
import { utilService } from '../../../services/util.service.js'

export class KeepEdit extends React.Component {
    state = {
        keep: {
            id: null,
            type: '',
            subject: '',
            txt: '',
            file: '',
            backgroundColor: '',
        },
    }

    componentDidMount() {
        console.log('props from keep edit', this.props);
        this.loadKeep()
    }

    loadKeep = () => {
        const { keepId } = this.state.id
        if (!keepId) {
            this.setState({ id: utilService.makeId(4) })
            console.log(this.state.id)
        }
        keepService.getById(keepId)
            .then(keep => this.setState({ keep }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            keep: { ...prevState.keep, [field]: value },
        }))
        console.log(this.state.keep)
    }

    onSaveKeep = (ev) => {
        ev.preventDefault()
        keepService.saveKeep(this.state.keep).then(() => {
            this.props.keeps.push('/keep')
        })
    }

    render() {
        const { subject, txt, file, backgroundColor } = this.state.keep
        return (
            <section className="keep-edit flex column align-center">
                <h2>Edit keep</h2>
                <form className='keep-form' onSubmit={this.onSaveKeep}>
                    <input
                        type='text'
                        name='subject'
                        onChange={this.handleChange}
                        placeholder='title'
                        value={subject}
                    />
                    <input
                        type='text'
                        name='txt'
                        onChange={this.handleChange}
                        placeholder='note'
                        value={txt}
                    />
                    <input
                        type='file'
                        name='file'
                        onChange={this.handleChange}
                        value={file}
                    />
                    <input
                        type='color'
                        name='backgroundColor'
                        onChange={this.handleChange}
                        placeholder='white'
                        value={backgroundColor}
                    />
                    <button>save!</button>
                </form>
            </section>
        )
    }
}
