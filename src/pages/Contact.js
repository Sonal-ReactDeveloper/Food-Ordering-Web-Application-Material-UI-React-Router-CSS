import React from 'react'
import "../styles/Contact.css"
import Contacti from "../assets/Contacti.jpeg"

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${Contacti})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id='contact-form' methode="POST">
                    <label htmlFor='name'>Full Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' />
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='name'  placeholder='Enter Your Email' />
                    <label htmlFor='message'>Message</label>
                    <textarea name='name' rows="7" placeholder='Enter Your Message'></textarea>
                    <button type='submit'>Send Message</button>

                </form>
            </div>

        </div>
    )
}

export default Contact
