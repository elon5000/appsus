import { KeepList } from '../cmps/keep-list.jsx'
import { keepService } from '../services/keep-service.js'
import { CreateKeep } from '../cmps/create-keep.jsx'
import { KeepFilter } from '../cmps/keep-filter.jsx'

export class KeepIndex extends React.Component {
  state = {
    keeps: [],
    filterBy: '',
  }

  componentDidMount() {
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    let paramObj = {}
    for (var value of urlSrcPrm.keys()) {
      paramObj[value] = urlSrcPrm.get(value)
    }
    if (!Object.keys(paramObj)) paramObj = null
    this.setState(
      (prevState) => ({ ...prevState, filterBy: paramObj }),
      () => {
        this.loadKeeps()
      }
    )
  }

  loadKeeps = () => {
    keepService.query().then((keeps) => this.setState({ keeps }))
  }

  onDeleteKeep = (id) => {
    keepService.removeKeep(id).then((keeps) => this.setState({ keeps }))
  }

  onCopyKeep = (id) => {
    keepService.copyKeep(id).then((keeps) => this.setState({ keeps }))
  }

  onPinKeep = (id) => {
    keepService.pinKeep(id).then((keeps) => this.setState({ keeps }))
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadKeeps)
    const urlSrcPrm = new URLSearchParams(filterBy)
    const searchStr = urlSrcPrm.toString()
    this.props.history.push(`/keep?=&${searchStr}`)
  }

  get keepsToDisplay() {
    let { keeps } = this.state
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
    const name = urlSrcPrm.get('name')
    if (name) {
      keeps = keeps.filter((keep) =>
        keep.subject.toLowerCase().includes(name.toLowerCase())
      )
    }
    return keeps
  }

  render() {
    const { keeps } = this.state
    if (!keeps) return <div>Loading..</div>
    return (
      <section className="keep-index">
        {/* <div>
          <CreateKeep />
        </div> */}
        <KeepFilter
          onSetFilter={this.onSetFilter}
          history={this.props.history}
        />
        <KeepList
          keeps={this.keepsToDisplay}
          onDeleteKeep={this.onDeleteKeep}
          onCopyKeep={this.onCopyKeep}
          onPinKeep={this.onPinKeep}
        />
      </section>
    )
  }
}
