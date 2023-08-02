import logo from './assets/Logo.svg';
import React from 'react';

function Nav() {
    return (
      <div className='nav'>
        <div className='position'>
        <img src={logo} alt="logo" className='logo'/>
        </div>
         <ul className='nav'>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Reservations">Reservations</a></li>
            <li><a href="/Order online">Order online</a></li>
            <li><a href="/Login">Login</a></li>
        </ul>
       </div>
    );
  }

export default Nav;