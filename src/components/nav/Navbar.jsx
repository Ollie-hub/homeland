import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../img/Logo.png'
import './navbar.scss'


const Navigation = () => {
  const [open, setOpen] = useState(false); // Bruger useState til at gemme open og setOpen variabler. 
  const toggleClass = () => { // funtion til at toggle class til hamburger meny
    setOpen(!open);
  };

  return (
    <header>
      <nav>
        <img src={Logo} alt="logo" className="logo"></img>
        <button onClick={() => toggleClass()} className="hamburger" > {/*Onlick button til at åpne og lukke burger menuen */}
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`nav-ul ${open === true ? 'show' : ''}`}>  {/* Her gikker den om variablen "open" er true, hvis den er så putter den klassen "show" på "nav-ul" */}
          <li className="link"><Link to="/FrontPage">Forside</Link></li>
          <li className="link"><Link to="/Housesforsale">Boliger til salg</Link></li>
          <li className="link"><Link to="/Login">Login</Link></li>
        </ul>
      </nav >
    </header>
  )
}

export { Navigation };
