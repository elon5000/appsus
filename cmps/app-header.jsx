import { HeaderModal } from './header-modal.jsx'

const { Link } = ReactRouterDOM

export class AppHeader extends React.Component {
  state = {
    modal: 'hide-modal',
  }

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
        <section className='header-warpper'>
          <Link to="/">
            <div className="logo-wrapper">
              <h1>
                <span className='a-1'>A</span>
                <span className='p-1'>p</span>
                <span className='p-2'>p</span>
                <span className='s-1'>s</span>
                <span className='u'>u</span>
                <span className='s-2'>s</span>
              </h1>
            </div>
          </Link>
          <div className="navbar-wrapper flex align-center">
            <button onClick={this.toggleModal}>
              <i className="fa fa-bars"></i>
            </button>
            <a href="https://accounts.google.com/servicelogin">
            <section>
            <i className="fa fa-user"></i>
            </section>
          </a>
          </div>
          <div className={`modal ${modalStyle}`}>
            <HeaderModal closeModal={this.closeModal} />
          </div>
        </section>
      </section>
    )
  }
}
