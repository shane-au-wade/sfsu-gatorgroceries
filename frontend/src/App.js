import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './public/components/landingPage'
import SignIn from './public/components/signIn'
import Survey from './public/components/survey'
import PlaceOrder from './public/components/placeOrder'
import CompletedOrder from './public/components/completedOrder/completedOrder'
import Events from './public/components/events'

import AdminEvents from './admin/components/events/AdminEvents'
import AdminCreateEvent from './admin/components/createEvent/AdminCreateEvent'
import AdminPreviewEvent from './admin/components/createEvent/AdminPreviewEvent'
import AdminCheckin from './admin/components/checkin/AdminCheckin'
import Receipt from './admin/components/checkin/Receipt'
import AdminAccounts from './admin/components/accounts/AdminAccounts'
import AdminCreateUser from './admin/components/accounts/AdminCreateUser'; 
import AdminData from './admin/components/data/AdminData'
import AdminLogin from './admin/components/login/AdminLogin'
import ForgotPassword from './admin/components/forgotPassword/forgotPassword';
import RequestNewPassword from './admin/components/request-new-password/request-new-password'
import './App.css'

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/survey' component={Survey} />
        <Route path='/events' component={Events} />
        <Route path='/place-order' component={PlaceOrder} />
        <Route path='/completed-order' component={CompletedOrder} />
        <Route path='/admin/login' component={AdminLogin}/>
        <Route path='/admin/request-new-password' component={RequestNewPassword}/>
        <Route path='/admin/forgot-password' component={ForgotPassword}/>
        <Route path='/admin/events' component={AdminEvents} />
        <Route path='/admin/create-event' component={AdminCreateEvent} />
        <Route path='/admin/preview-event' component={AdminPreviewEvent} />
        <Route path='/admin/checkin' component={AdminCheckin} />
        <Route path='/admin/receipt' component={Receipt} />
        <Route path='/admin/accounts' component={AdminAccounts} />
        <Route path='/admin/create-user' component={AdminCreateUser} />
        <Route path='/admin/data' component={AdminData} />
      </Switch>
    </Router>
  ) 
}

export default App;
