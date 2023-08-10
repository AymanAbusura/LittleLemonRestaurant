import logo from './assets/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Reservation from './Reservation';
import OrderOnline from './OrderOnline'
import Login from './Login';

function Nav() {
    return (
      <div className='nav'>
        <div className='position'>
        <img src={logo} alt="logo" className='logo'/>
        </div>
         <ul className='nav'>
            <li><Link to="/Home" element={Home}>Home</Link></li>
            <li><Link to="/About" element={About}>About</Link></li>
            <li><Link to="/Reservation" element={Reservation}>Reservations</Link></li>
            <li><Link to="/Orderonline" element={OrderOnline}>Order online</Link></li>
            <li><Link to="/Login" element={Login}>Login</Link></li>
        </ul>
       </div>
    );
  }

export default Nav;