import React, { useState } from 'react'
import "./navbar.css"
import {FaRunning,FaAppleAlt} from "react-icons/fa"
import {BsSend} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
/*import {GrClose} from "react-icons/gr"*/
import {IoCloseCircleOutline} from "react-icons/io5"
const NavBar = () => {
  const [hamburgerOpen,setHamburgerOpen]=useState(true)
  const toggleHamburger=()=>{
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src="https://assets.website-files.com/5df6d99035688cba82155593/5df7c34a5b69f6204bbbb2d9_MK%20Logo.svg" alt="logo" />
        </div>
        <div className="navbar-menu">
            <a href="#">Personal Training</a>
            <a href="#">Health&Nutrition</a>
            <a href="#">get intouch</a>
        </div>
        <div className="navbar-hamburger" onClick={toggleHamburger}>
          {hamburgerOpen?(<GiHamburgerMenu/>):(<IoCloseCircleOutline/>)}
        </div>
        <div className="navbar-menu-sm" style={hamburgerOpen?{display:'none'}:{}}>
            <a href="#"><FaRunning/> Personal Training</a>
            <a href="#"><FaAppleAlt/> Health&Nutrition</a>
            <a href="#"><BsSend/> get intouch</a>
        </div>
    </div>
  )
}

export default NavBar