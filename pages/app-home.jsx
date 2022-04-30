import { keepService } from '../appus/keep/services/keep.service'

export function AppHome() {
  componentDidMount = () => {
    this.getTodoData()
    this.getEmailsData()
  }

  getTodoData = () => {
    keepService.query()
  }

  return <section>Hello from Home</section>
}
