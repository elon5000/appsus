const { Link } = ReactRouterDOM

export function CreateKeep() {
  return (
    <section>
      <Link to="/keep/edit">
        {/* <div className="plus-wrapper">
          <span>
            <i className="fa fa-plus"></i>
          </span>
        </div> */}
        <div>
          <span>Create</span>
        </div>
      </Link>
    </section>
  )
}
