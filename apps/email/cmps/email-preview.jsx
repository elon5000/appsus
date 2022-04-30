import { emailService } from '../services/email-service.js'
import { LongText } from './long-text.jsx'

const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {
  onFirstEnter = () => {
    if (
      this.props.email.isRead === false &&
      this.props.email.state === 'inbox'
    ) {
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

  onSetIsStarred = (e, id) => {
    e.preventDefault()
    this.props.onSetIsStarred(id)
  }

  getSentDate = (sentAt) => {
    const emailTime = sentAt
    const timeToString = new Date(emailTime)
    let time = timeToString.toLocaleString()
    time = time.slice(0, 10)
    return time
  }

  render() {
    const {
      id,
      from,
      to,
      subject,
      body,
      file,
      isRead,
      status,
      sentAt,
      isStar,
    } = this.props.email
    const changeToForm = status === 'inbox' ? from : to
    const linkTo = status === 'draft' ? `edit/${id}` : id
    const grayBg = isRead ? 'whitesmoke' : 'white'
    const starBg = isStar ? '#FFD700' : '#e8e8e8f3'
    const sentOrDraft =
      status === 'starred' || status === 'inbox' ? true : false
    const sentTime = this.getSentDate(sentAt)
    return (
      <Link to={`/email/${linkTo}`} onClick={this.onFirstEnter}>
        <section className="email-preview" style={{ backgroundColor: grayBg }}>
          <div className="email-options-right">
            <button
              className="btn-star"
              onClick={(e) => this.onSetIsStarred(e, id)}
            >
              <i className="fa fa-star" style={{ color: starBg }}></i>
            </button>
            <button>
              <i className="fa fa-bookmark"></i>
            </button>
          </div>
          <h2>
            {changeToForm.fullName} <br />
            <span>{changeToForm.email}</span>
          </h2>
          <h3>{subject}</h3>
          <span className="tablet-none">-</span>
          <h4 className="email-text-reg">
            &nbsp;
            <LongText text={body} />
          </h4>
          <div className="email-options-left">
            {file && (
              <div className="attachment-container">
                <span className="attachment-span">
                  <img src="./assets/imgs/attachment.png" />
                  <span>{file.slice(46)}</span>
                </span>
              </div>
            )}
            <div className="email-time">{sentTime}</div>
            <div className="email-show-btns flex">
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
          </div>
        </section>
      </Link>
    )
  }
}
