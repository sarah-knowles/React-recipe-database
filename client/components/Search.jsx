import React from 'react'

class Search extends React.Component {

  handleClick = (e) => {
  //  getrecipes
  }

  render() {
    return (
      <div>
        <h3 className='search-title'>What Do You Feel Like?</h3>
        <form className='search' />
        <input className='search' type='text' />
        <button className='search' onClick={this.handleClick} type='submit'>Search</button>
    </div>
    )
  }
}


export default Search