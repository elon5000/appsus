import { KeepList } from '../cmps/keep-list.jsx'
import { keepService } from '../services/keep-service.js'
import { CreateKeep } from '../cmps/create-keep.jsx'

export class KeepIndex extends React.Component {
  state = {
    keeps: [],
    filterBy: 'type',
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
        <div>
          <CreateKeep />
        </div>
        <KeepList keeps={keeps} onSelectKeep={this.onSelectKeep} />
      </section>
    )
  }
}
