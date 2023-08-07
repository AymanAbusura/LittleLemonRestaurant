import logo2 from './assets/Logo2.png';
import React from 'react';


function Footer() {
    return (
        <section className='footer'>
            <img src={logo2} alt="logo2" className='logo2'/>
            <div className='block'>
                <span>Doormat Navigation</span>
                <p>Home</p>
                <p>About</p>
                <p>Reservations</p>
                <p>Order online</p>
                <p>Login</p>
            </div>
            <div className='block'>
                <span>Contact</span>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div className='block'>
                <span>Social Media Links</span>
                <br></br>
                <p><a href="/Facebook">Facebook</a></p>
                <br></br>
                <p><a href="/Instagram">Instagram</a></p>
                <br></br>
                <p><a href="/Twitter">Twitter</a></p>
            </div>
        </section>
    );
  }

export default Footer;