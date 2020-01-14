import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/public/landingPage'
import SignIn from './components/public/signIn'
import Survey from './components/public/survey'
import PlaceOrder from './components/public/placeOrder'
import Events from './components/public/events'

import AdminEvents from './components/admin/AdminEvents'
import AdminCreateEvent from './components/admin/AdminCreateEvent'
import AdminAccounts from './components/admin/AdminAccounts'
import AdminData from './components/admin/AdminData'
import AdminLogin from './components/admin/AdminLogin'

import './styleSheets/App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/survey' component={Survey} />
        <Route path='/events' component={Events} />
        <Route path='/placeorder' component={PlaceOrder} />
        <Route path='/admin/login' component={AdminLogin}/>
        <Route path='/admin/events' component={AdminEvents} />
        <Route path='/admin/create-event' component={AdminCreateEvent} />
        <Route path='/admin/accounts' component={AdminAccounts} />
        <Route path='/admin/data' component={AdminData} />
      </Switch>
    </Router>
  ) 
}

export default App;
