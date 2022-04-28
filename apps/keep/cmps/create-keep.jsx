const { Link } = ReactRouterDOM

export function CreateKeep() {
  return (
    <section>
      <Link to="/keep/edit">
        <div>
          <span>Create</span>
        </div>
      </Link>
    </section>
  )
}
