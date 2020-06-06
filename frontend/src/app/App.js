//import './App.css'
import React from 'react'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App(props) {
  return (
    <Router props={props}>
      <Routes/>
    </Router>
  );
}

export default App;
