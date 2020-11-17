import React from 'react'
import recipedata from '../../Data/recipes'


class DisplayDrinkRecipe extends React.Component {
  
 
 findRecipe (id) {
  let activeRecipe = recipedata.drinks.find(el => el.id == id) 
  return(activeRecipe)
}


   render () {
   
   var currentrecipe =  this.findRecipe(10404) 
     console.log(currentrecipe)
    
     return (
    <div>
  
      <h2>{currentrecipe.title}</h2>
      <h3>{currentrecipe.subtitle}</h3>
      <img class='page' src={currentrecipe.image} alt="Oops"/>
      <ul>{currentrecipe.ingredients.map(item => (
      <li key={item}>{item}</li>))}</ul>
      <p>{currentrecipe.instructions}</p> 
    </div>
     )
  }
}


export default DisplayDrinkRecipe