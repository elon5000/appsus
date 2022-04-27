import { KeepList } from '../cmps/keep-list.jsx'
import { keepService } from '../services/keep-service.js'

const { Link } = ReactRouterDOM

export class KeepIndex extends React.Component {
  state = {
    keeps: [],
  }
  
  render() {
    return <section>Im Keep Index</section>
  }
}
