import logo from './assets/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <div className='nav'>
        <div className='position'>
        <img src={logo} alt="logo" className='logo'/>
        </div>
         <ul className='nav'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Reservation">Reservations</Link></li>
            <li><Link to="/Orderonline">Order online</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
       </div>
    );
  }

export default Nav;