import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Search from './Search'
import DisplayRecipe from './DisplayRecipe'
import MeatDishes from './MeatDishes'
import PastaDishes from './PastaDishes'
import Desserts from './Desserts'
import Drinks from './Drinks'



class App extends React.Component {

  render() {
    return (
      <div>
     
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Search' component={Search}/>
        <Route exact path='/MeatDishes' component={MeatDishes}/>
        <Route path='/DisplayRecipe/:id' component={DisplayRecipe}/>
        <Route path='/PastaDishes' component={PastaDishes}/>
        <Route exact path='/Desserts' component={Desserts}/>
        <Route exact path='/Drinks' component={Drinks}/>
       
      
    
    </div>
    )
  }
}

export default App
