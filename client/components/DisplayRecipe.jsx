import React from 'react'
import recipedata from '../../Data/recipes'


class DisplayRecipe extends React.Component {
 
 findRecipe (id) {
  let active = recipedata.find(el => el.id == id) 
  console.log(recipedata)
  console.log(active)
  return(active)
 
}


   render () {
   
   let currentrecipe = this.findRecipe(10103) 
    
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


export default DisplayRecipe