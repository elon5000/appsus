export class KeepRecorder extends React.Component {
    state = {
        file: null,
        isPremmited: false,
    }

    render() {
        return <div className='recording-holder'>
            <button>record</button>
            <section className='audio-container'>
                <audio controls></audio>
            </section>
        </div>
    }

}