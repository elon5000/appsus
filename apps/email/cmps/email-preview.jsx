import { emailService } from '../services/email-service.js'

const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {
  change = () => {
    emailService.changeRead(this.props.email.id)
    console.log('check')
  }

  render() {
    const { id, from, to, subject, body, file, isRead, status } =
      this.props.email
    const changeToForm = status === 'inbox' ? from : to
    const linkTo = status === 'draft' ? `edit/${id}` : id
    const grayBg = isRead ? '#F2F2F2' : 'white'
    return (
      <Link to={`/email/${linkTo}`} onClick={this.change}>
        <article className="email-preview" style={{ backgroundColor: grayBg }}>
          <div className="email-options-right">
            <button>
              <i className="fa fa-star"></i>
            </button>
            <button>
              <i className="fa fa-tag"></i>
            </button>
          </div>
          <h2>{changeToForm.fullName}</h2>
          <h2>{changeToForm.email}</h2>
          <h3>Subject : {subject}</h3>
          <h4>{body}</h4>
          {file && (
            <div className="attachment-container">
              <span className="attachment-span">
                <img src="./assets/imgs/attachment.png" />
                <span>{file.slice(46)}</span>
              </span>
            </div>
          )}
          <div className="email-options-right">
            <button>
              <i className="fa fa-trash"></i>
            </button>
            {(isRead && (
              <button>
                <i className="fa fa-envelope-open"></i>
              </button>
            )) || (
              <button>
                <i className="fa fa-envelope"></i>
              </button>
            )}
          </div>
        </article>
      </Link>
    )
  }
}
