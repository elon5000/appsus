
export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            isInbox,
            isSent,
            isDtaft,
            isStarred
        },
    }

    inputRef = React.createRef()

    componentDidMount() {
        // console.log('Filter props', this.props);
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            // this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }



    render() {
        const { isInbox, isSent, isDraft, isStarred } = this.state.filterBy
        return <section className="email-filter">
            <form onSubmit={this.onFilter}>
                <label htmlFor="by-inbox">Inbox</label>
                <button  id="inbox-btn" onClick={this.handleChange} ref={this.inputRef}>Inbox</button>

                <label htmlFor="by-minSpeed">Min Speed</label>
                <input type="number" id="by-minSpeed" placeholder="by min speed" name="minSpeed"
                    value={minSpeed} onChange={this.handleChange} />

                <label htmlFor="by-maxSpeed">Max Speed</label>
                <input type="number" id="by-maxSpeed" placeholder="by max speed" name="maxSpeed"
                    value={maxSpeed} onChange={this.handleChange} />

                <button>FILTER!</button>
            </form>
        </section>
    }
}