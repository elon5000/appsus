import { KeepList } from '../cmps/keep-list.jsx'
import { keepService } from '../services/keep.service.js'

const { Link } = ReactRouterDOM

export class KeepIndex extends React.Component {
  state = {
    keeps: [],
    filterBy: 'type'
  }

  componentDidMount() {
    this.loadKeeps()
  }

  loadKeeps = () => {
    keepService
      .query(this.state.filterBy)
      .then((keeps) => this.setState({ keeps }))
  }

  render() {
    const { keeps } = this.state
    return (
      <section className="keep-index">
        <Link to="/keep/edit">
          <button>New Keep</button>
        </Link>
        <KeepList keeps={keeps}  />
      </section>
    )
  }
}
