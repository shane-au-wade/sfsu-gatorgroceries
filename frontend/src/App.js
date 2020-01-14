import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/landingPage'
import SignIn from './components/signIn'
import Survey from './components/survey'
import PlaceOrder from './components/placeOrder'

import AdminEvents from './components/AdminEvents'
import AdminCreateEvent from './components/AdminCreateEvent'
import AdminAccounts from './components/AdminAccounts'
import AdminData from './components/AdminData'
import AdminLogin from './components/AdminLogin'

import './styleSheets/App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/survey' component={Survey} />
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
