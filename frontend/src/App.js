import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import Survey from './components/Survey'
import PlaceOrder from './components/PlaceOrder'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/survey' component={Survey} />
        <Route path='/placeorder' component={PlaceOrder} />
      </Switch>
    </Router>
  ) 
}

export default App;
