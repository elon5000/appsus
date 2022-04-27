import { EmailIndex } from './apps/email/pages/email-index.jsx'
import { NoteIndex } from './apps/keep/pages/note-index.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { AppHome } from './pages/app-home.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Switch>
          <Route path="/keep" component={NoteIndex} />
          <Route path="/email" component={EmailIndex} />
          <Route path="/" component={AppHome} />
        </Switch>
        <AppFooter />
        {/* <UserMsg /> */}
      </section>
    </Router>
  )
}
