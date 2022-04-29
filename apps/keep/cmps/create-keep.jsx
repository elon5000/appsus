const { Link } = ReactRouterDOM

export function CreateKeep() {
  return (
    <section>
      <Link to="/keep/edit">
        <div>
          <span>New Keep</span>
        </div>
      </Link>
    </section>
  )
}
