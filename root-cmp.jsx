import { EmailDetails } from './apps/email/pages/email-details.jsx'
import { EmailEdit } from './apps/email/pages/email-edit.jsx'
import { EmailIndex } from './apps/email/pages/email-index.jsx'
import { KeepEdit } from './apps/keep/pages/keep-edit.jsx'
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
          <Route path="/email/edit/:emailId?" component={EmailEdit} />
          <Route path="/email/:emailId" component={EmailDetails} />
          <Route path="/email" component={EmailIndex} />
          <Route path="/keep/edit/:keepId?" component={KeepEdit} />
          <Route path="/keep" component={KeepIndex} />
          <Route path="/" component={AppHome} />
        </Switch>
        <AppFooter />
        {/* <UserMsg /> */}
      </section>
    </Router>
  )
}
