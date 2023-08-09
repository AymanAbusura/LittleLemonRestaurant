import logo from './assets/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import Reservations from './Reservation.js';
import HomePage from './HomePage';

function Nav() {
    return (
      <div className='nav'>
        <div className='position'>
        <img src={logo} alt="logo" className='logo'/>
        </div>
         <ul className='nav'>
            <li><Link to="/HomePage" element={HomePage}>Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link to="/Reservations" element={Reservations}>Reservations</Link></li>
            <li><Link href="/Orderonline">Order online</Link></li>
            <li><Link href="/Login">Login</Link></li>
            {/* <Link to="/HomePage" element={HomePage}><li>Home</li></Link>*/}
        </ul>
       </div>
    );
  }

export default Nav;