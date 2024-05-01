import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <span className="text">freelance</span>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                <span>Become a Seller</span>
                <button>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar