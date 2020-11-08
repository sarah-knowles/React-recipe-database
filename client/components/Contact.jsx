import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact Me</h2>
        <form className='contactForm'>
          <label> Name:</label>
          <input type="text" name="name" />
          <label>Message:</label>
          <textarea className='textBox'></textarea>
        <input type="submit" value="Submit" />
        </form>

      </div >
    )
  }
}


export default Contact