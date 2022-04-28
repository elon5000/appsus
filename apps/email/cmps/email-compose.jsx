const { Link } = ReactRouterDOM

export function EmailCompose() {
  return (
    <section className="email-compose">
      <Link to="/email/edit">
        <div className="email-compose-wrapper flex align-center">
          <div className="plus-wrapper">
            <span>
              <i className="fa fa-plus"></i>
            </span>
          </div>
          <div className="email-compose-text">
            <span>Compose</span>
          </div>
        </div>
      </Link>
    </section>
  )
}
