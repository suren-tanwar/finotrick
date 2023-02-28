import React from 'react'
import logo from "../images/logo.svg"
import logo2 from "../images/logo2.svg"
import "./header.css"

function Header() {
  return (
    <div  className='logo-div'>
        <img src={logo} className="img-logo" alt="" />
        <img src={logo2} className="img-logo" alt="" />
        <p>Powered By OneInfinity</p>
    </div>
  )
}

export default Header