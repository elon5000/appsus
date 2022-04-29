import { emailService } from '../services/email-service.js'

const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {
  onFirstEnter = () => {
    if (this.props.email.isRead === false) {
      emailService.changeRead(this.props.email.id)
    }
  }

  onDeleteEmail = (e, id) => {
    e.preventDefault()
    this.props.onDeleteEmail(id)
  }

  onMarkEmail = (e, id) => {
    e.preventDefault()
    this.props.onMarkEmail(id)
  }

  render() {
    const { id, from, to, subject, body, file, isRead, status } =
      this.props.email
    const changeToForm = status === 'inbox' ? from : to
    const linkTo = status === 'draft' ? `edit/${id}` : id
    const grayBg = isRead ? 'whitesmoke' : 'white'
    const sentOrDraft =
      status === 'starred' || status === 'inbox' ? true : false
    return (
      <Link to={`/email/${linkTo}`} onClick={this.onFirstEnter}>
        <section className="email-preview" style={{ backgroundColor: grayBg }}>
          <div className="email-options-right">
            <button className="btn-star">
              <i className="fa fa-star"></i>
            </button>
            <button>
              <i className="fa fa-bookmark"></i>
            </button>
          </div>
          <h2>
            {changeToForm.fullName} <br />
            <span>{changeToForm.email}</span>
          </h2>
          <h3>{subject}&nbsp;&nbsp;-</h3>
          <h4 className="email-text-reg">&nbsp;&nbsp;{body}</h4>
          <div className="email-options-left">
            {file && (
              <div className="attachment-container">
                <span className="attachment-span">
                  <img src="./assets/imgs/attachment.png" />
                  <span>{file.slice(46)}</span>
                </span>
              </div>
            )}
            <button onClick={(e) => this.onDeleteEmail(e, id)}>
              <i className="fa fa-trash"></i>
            </button>
            {sentOrDraft
              ? (isRead && (
                  <button onClick={(e) => this.onMarkEmail(e, id)}>
                    <i className="fa fa-envelope-open"></i>
                  </button>
                )) || (
                  <button onClick={(e) => this.onMarkEmail(e, id)}>
                    <i className="fa fa-envelope"></i>
                  </button>
                )
              : null}
          </div>
        </section>
      </Link>
    )
  }
}
