import { HeaderModal } from './header-modal.jsx'

const { Link } = ReactRouterDOM

export class AppHeader extends React.Component {
  state = {
    modal: 'hide-modal',
  }

  // componentDidMount() {

  // }

  toggleModal = () => {
    if (this.state.modal === 'hide-modal')
      this.setState({ modal: 'show-modal' })
    else this.setState({ modal: 'hide-modal' })
  }

  closeModal = () => {
    this.setState({ modal: 'hide-modal' })
  }

  render() {
    const modalStyle = this.state.modal
    return (
      <section className="app-header">
        <div className="logo-wrapper">
          <h1>Appsus</h1>
        </div>
        <div className="navbar-wrapper flex align-center">
          <button onClick={this.toggleModal}>
            <i className="fa fa-bars"></i>
          </button>
          <i className="fa fa-user"></i>
        </div>
        <div className={`modal ${modalStyle}`}>
          <HeaderModal closeModal={this.closeModal} />
        </div>
      </section>
    )
  }
}
