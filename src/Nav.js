import logo from './assets/Logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Reservations from './Reservations';

function Nav() {
    return (
      <div className='nav'>
        <div className='position'>
        <img src={logo} alt="logo" className='logo'/>
        </div>

        <BrowserRouter>
         <ul className='nav'>
            <li><Link to="/HomePage" element={HomePage}>Home</Link></li>
            <li><a href="/About">About</a></li>
            <li><Link to="/Reservations" element={Reservations}>Reservations</Link></li>
            <li><a href="/Order online">Order online</a></li>
            <li><a href="/Login">Login</a></li>
        </ul>
        <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/" element={<About/>}></Route> */}
          <Route path="/" element={<Reservations/>}></Route>
          {/* <Route path="/" element={<OrderOnline/>}></Route> */}
          {/* <Route path="/" element={<Login/>}></Route> */}
        </Routes>
       </BrowserRouter>
       </div>
    );
  }

export default Nav;