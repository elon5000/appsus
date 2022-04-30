const { Link } = ReactRouterDOM

export class HeaderModal extends React.Component {
  onCloseModal = () => {
    this.props.closeModal()
  }

  render() {
    return (
      <section className="header-modal flex align-center">
        <Link to="/book" onClick={this.onCloseModal}>
          <i className="fa fa-book"></i>
        </Link>
        <Link to="/email" onClick={this.onCloseModal}>
          <i className="fa-solid fa-envelopes-bulk"></i>
        </Link>
        <Link to="/keep" onClick={this.onCloseModal}>
          <i className="fa-solid fa-file-pen"></i>
        </Link>
      </section>
    )
  }
}
