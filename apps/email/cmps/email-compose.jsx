const { Link } = ReactRouterDOM

export function EmailCompose() {
  return (
    <section>
      <Link to="/email/edit">
        <div className="plus-wrapper">
          <span>
            <i className="fa fa-plus"></i>
          </span>
        </div>
        <div>
          <span>Compose</span>
        </div>
      </Link>
    </section>
  )
}
