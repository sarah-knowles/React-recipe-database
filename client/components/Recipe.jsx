import React from 'react'

const Recipe = ({title, subheading, image}) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{subheading}</p>
      <img src={image} alt=""/>
      <div class='rating'><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
    </div>
  )
}




export default Recipe