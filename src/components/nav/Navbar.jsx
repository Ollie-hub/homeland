import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss'


const Navigation = () => {

  const [open, setOpen] = useState(false);
  const toggleClass = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <img src="#" alt="logo" className="logo"></img>
      <button onClick={() => toggleClass()} className="hamburger" >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-ul ${open === true ? 'show' : ''}`}>
        <li className="link"><Link to="/FrontPage">Frontpage</Link></li>
        <li className="link"><Link to="/Products">Products</Link></li>
        <li className="link"><Link to="/Form">Form</Link></li>
        <li className="link"><Link to="/Cart">Cart</Link></li>
        <li className="link"><Link to="/Login">Login</Link></li>
      </ul>
    </nav >
  )
}

export { Navigation };
