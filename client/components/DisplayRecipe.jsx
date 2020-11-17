import React from 'react'
import recipedata from '../../Data/recipes'


class DisplayMeatRecipe extends React.Component {
  
 
 findRecipe (id) {
  let activeRecipe = recipedata.meat.find(el => el.id == id) 
  return(activeRecipe)
}


   render () {
   
   var currentrecipe =  this.findRecipe(10101) 
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


export default DisplayMeatRecipe