import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpeg';
import '../styles/Contact.css'; 

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className='rightSide'>
            <h1>Contact us</h1>

            <form id="contact-form" method="POST">
              <label htmlfor="name">Full Name</label>
              <input name="name" placeholder='Enter full name...' type="text"/>
              <label htmlfor="email">Email</label>
              <input name="email" placeholder='Enter email...' type="email"/>
              <label htmlfor="message">Message</label>
              <textarea rows="6" placeholder='Enter message...' name="message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
