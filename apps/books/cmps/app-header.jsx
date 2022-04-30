const { NavLink, withRouter } = ReactRouterDOM

function _AppHeader(props) {
  return (
    <header className="app-header flex space-between">
      <a
        className="logo"
        onClick={() => {
          props.history.push('/')
        }}
      >
        E-Book
      </a>

      <nav className="flex align-center space-between">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book">Books</NavLink>
      </nav>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
