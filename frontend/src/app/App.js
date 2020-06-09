//import './App.css'
import React from 'react'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {

  const theme = createMuiTheme({
    palette: {
      type: 'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes/>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
