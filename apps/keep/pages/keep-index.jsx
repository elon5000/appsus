import { KeepList } from '../cmps/keep-list.jsx'
import { keepService } from '../services/keep-service.js'

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
      .then((keeps) => this.setSgittate({ keeps }))
  }

  render() {
    const { keeps } = this.state
    return (
      <section className="keep-index">
        <Link to="/email/edit">
          <button>New Keep</button>
        </Link>
        <KeepList keeps={keeps} onSelectEmail={this.onSelectKeep} />
      </section>
    )
  }
}
