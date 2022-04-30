const { Link } = ReactRouterDOM

export function CreateKeep() {
  return (
    <section>
      <Link to="/keep/edit">
        <div>
          <button className="add-keep-button">+</button>
        </div>
      </Link>
    </section>
  )
}
