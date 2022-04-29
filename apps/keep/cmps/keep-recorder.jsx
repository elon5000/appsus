// import { uploadService } from '../../../services/upload.service.js'
export class KeepRecorder extends React.Component {
    state = {
        file: null,
    }
    mediaRecorder
    audioChunks = []
    intervalID


    // componentDidMount() {
    //     this.mediaRecorder.addEventListener('dataavailable', this.handleMediaRecorderEnter)
    // }

    // componentWillUnmount() {
    //     this.mediaRecorder.removeEventListener('dataavailable', this.handleMediaRecorderEnter)
    // }

    onRecord = (ev) => {
        ev.preventDefault()
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                this.mediaRecorder = new MediaRecorder(stream)
                this.mediaRecorder.start()
                console.log(this.mediaRecorder)
            })

        handleMediaRecorderEnter = (e) => {
            audioChunks.push(e.data)
        }
    }

    onStopRecord = (ev) => {
        ev.preventDefault()
        clearTimeout(this.intervalID)
        this.mediaRecorder.stop()
        const audioBlob = new Blob(this.audioChunks)
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        this.setState({ file: audio })
        console.log('Done recording', this.state)
    }

    render() {
        return <div className='recording-holder'>
            <section className='audio-container'>
                <button onClick={this.onRecord}>record</button>
                <button onClick={this.onStopRecord}>stop recording</button>
                <audio src={this.state.file} controls></audio>
            </section>
        </div>
    }

}