import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../img/Logo.png'
import './navbar.scss'


const Navigation = () => {

  const [open, setOpen] = useState(false);
  const toggleClass = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <img src={Logo} alt="logo" className="logo"></img>
      <button onClick={() => toggleClass()} className="hamburger" >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-ul ${open === true ? 'show' : ''}`}>
        <li className="link"><Link to="/FrontPage">Forside</Link></li>
        <li className="link"><Link to="/Housesforsale">Boliger til salg</Link></li>
        <li className="link"><Link to="/Login">Login</Link></li>
      </ul>
    </nav >
  )
}

export { Navigation };
