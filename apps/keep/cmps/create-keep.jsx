const { Link } = ReactRouterDOM

export function CreateKeep() {
  return (
    <section>
      <Link to="/keep/edit">
        <div>
          <button>New Keep</button>
        </div>
      </Link>
    </section>
  )
}
