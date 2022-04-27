// import { CarApp } from './pages/car-app.jsx'
// import { Home } from './pages/home.jsx'
// import { About } from './pages/about.jsx'
// import { CarDetails } from './pages/car-details.jsx'
// import {CarEdit} from './pages/car-edit.jsx'
// import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
// import { UserMsg } from './cmps/user-msg.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app">
       {/* <AppHeader />  */}
            <Switch>
                {/* <Route path="/car/edit/:carId?" component={CarEdit}/> */}
                {/* <Route path="/car/:carId" component={CarDetails}/> */}
                {/* <Route path="/car" component={CarApp} /> */}
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/" component={Home} /> */}
            </Switch>
        <AppFooter />
        {/* <UserMsg /> */}
        </section>
    </Router>
}
