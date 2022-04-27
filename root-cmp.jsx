import { EmailDetails } from './apps/email/pages/email-details.jsx'
import { EmailEdit } from './apps/email/pages/email-edit.jsx'
import { EmailIndex } from './apps/email/pages/email-index.jsx'
import { KeepIndex } from './apps/keep/pages/keep-index.jsx'
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
          <Route path="/email/:emailId" component={EmailDetails} />
          <Route path="/email/edit" component={EmailEdit} />
          <Route path="/keep" component={KeepIndex} />
          <Route path="/email" component={EmailIndex} />
          <Route path="/" component={AppHome} />
        </Switch>
        <AppFooter />
        {/* <UserMsg /> */}
      </section>
    </Router>
  )
}
