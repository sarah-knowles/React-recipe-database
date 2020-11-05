import React from 'react'
import {HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'


class App extends React.Component {
  render() {
    return (
      <>
       <Router>
        
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}/>
        



      </Router>
    </>
    )
  }
}

export default App
