const { Link } = ReactRouterDOM

export class HeaderModal extends React.Component {
  onCloseModal = () => {
    this.props.closeModal()
  }

  render() {
    return (
      <section className="header-modal flex align-center">
        <Link to="/book" onClick={this.onCloseModal}>
          <i className="fa fa-book book-pick"></i>
        </Link>
        <Link to="/email" onClick={this.onCloseModal}>
          <i className="fa-solid fa-envelopes-bulk email-pick"></i>
        </Link>
        <Link to="/keep" onClick={this.onCloseModal}>
          <i className="fa-solid fa-file-pen keep-pick"></i>
        </Link>
      </section>
    )
  }
}
