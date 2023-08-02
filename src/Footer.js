import logo2 from './assets/Logo2.png';
import React from 'react';


function Footer() {
    return (
        <div>
            <img src={logo2} alt="logo2"/>
            <div>
                <span>Doormat Navigation</span>
                <p></p>
            </div>
            <div>
                <span>Contact</span>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div>
                <span>Social Media Links</span>
                <br></br>
                <a href="/Facebook">Facebook</a>
                <br></br>
                <a href="/Instagram">Instagram</a>
                <br></br>
                <a href="/Twitter">Twitter</a>
            </div>
        </div>
    );
  }

export default Footer;