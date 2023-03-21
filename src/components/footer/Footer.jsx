import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src="https://assets.website-files.com/5df6d99035688cba82155593/5df7c34a5b69f6204bbbb2d9_MK%20Logo.svg" alt="" />
        </div>
        <div className="footer-text">
            <h1>
                matt kiebach 
            </h1>
            <div className="footer-links">
                <a href="#">About Me</a>
                <a href="#">Personal Training</a>
                <a href="#">Nutrition</a>
            </div>
            <p>
            MATTKIEBACH.COM © 2019 ALL RIGHTS RESERVED WEBSITE DESIGNED BY CALEBMJW.COM
            </p>
        </div>
        <div className="footer-form">
            <label for="mail">SIGN UP FOR WEEKLY SPECIALS</label>
            <input type="text" className='footer-input' placeholder='Name' />
            <input type="email" className='footer-input' placeholder='Email'/>
            <button className='footer-btn'>submit</button>
        </div>
    </div>
  )
}

export default Footer