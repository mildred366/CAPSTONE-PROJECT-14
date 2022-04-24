import React from 'react'
import '../Contact.css'

function Form() {
  return (
    <div className='form'>
        <form>
            <label for="name">Full Name</label><br/>
            <input type="text" id="name" placeholder='Your Full Name'/><br/>
            <label for="email">Email</label><br/>
            <input type="email" id="name" placeholder='Your E-mail'/><br/>
            <textarea id="message" name="message" placeholder='Your Message'></textarea><br/>
            <input type='submit' value="Send" />
        </form>
    </div>
  )
}

export default Form