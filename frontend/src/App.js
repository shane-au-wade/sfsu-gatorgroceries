import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './public/components/landingPage'
import SignIn from './public/components/signIn'
import Survey from './public/components/survey'
import PlaceOrder from './public/components/placeOrder'
import Events from './public/components/events'

import AdminEvents from './admin/components/AdminEvents'
import AdminCreateEvent from './admin/components/AdminCreateEvent'
import AdminAccounts from './admin/components/AdminAccounts'
import AdminData from './admin/components/AdminData'
import AdminLogin from './admin/components/AdminLogin'

import './App.css'

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
