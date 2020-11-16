import React from 'react'
import meat from '../../Data/recipes'


export default class DisplayRecipe extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
      this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle,
      image: this.props.image,
      ingredients: [],
      instructions: ''
    }
  }
   render () {
    //  let id = this.props.id.filter(params.id)
     return (
    <div>
      <h3>{this.title}</h3>
      <p>{this.subtitle}</p>
      <img src={this.image} alt="Oops"/>
      <ul>{this.ingredients.map(item => (
      <li key={item}>{ingredients}</li>))}</ul>
      <p>{this.instructions}</p>
    </div>
     )
  }
}


