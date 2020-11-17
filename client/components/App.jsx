import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Search from './Search'
import DisplayMeatRecipe from './DisplayRecipe'
import DisplayDrinkRecipe from './DisplayDrinkRecipe'
import DisplayDessertRecipe from './DisplayDessertRecipe'
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
        <Route path='/MeatDishes/:id' component={DisplayMeatRecipe}/>
        <Route path='/PastaDishes' component={PastaDishes}/>
        <Route exact path='/Desserts' component={Desserts}/>
        <Route path='/Desserts/:id' component={DisplayDessertRecipe}/>
        <Route exact path='/Drinks' component={Drinks}/>
        <Route path='/Drinks/:id' component={DisplayDrinkRecipe}/>
        
      
    
    </div>
    )
  }
}

export default App
