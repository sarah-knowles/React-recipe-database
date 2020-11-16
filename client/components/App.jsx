import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Search from './Search'
import DisplayRecipe from './Recipe'
import MeatDishes from './MeatDishes'
import PastaDishes from './PastaDishes'
import Desserts from './Desserts'
import Drinks from './Drinks'

import id from '../../data/recipes' 


class App extends React.Component {

  render() {
    return (
      <div>
      <Router>
        <Route path='/:id' component={DisplayRecipe}/>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Search' component={Search}/>
        <Route path='/MeatDishes' component={MeatDishes}/>
        <Route path='/PastaDishes' component={PastaDishes}/>
        <Route path='/Desserts' component={Desserts}/>
        <Route path='/Drinks' component={Drinks}/>
        
        

     
    </Router>
    
    </div>
    )
  }
}

export default App
