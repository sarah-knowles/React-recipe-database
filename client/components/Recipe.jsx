import React from 'react'

const Recipe = ({title, subheading, image, ingredients, instructions}) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{subheading}</p>
      <img src={image} alt=""/>
      <p>{ingredients}</p>
      <p>{instructions}</p>
    </div>
  )
}




export default Recipe