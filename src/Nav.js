import React from 'react';

function Nav() {
    return (
      <div>
         <ul>
            <a href="/Home"><li>Home</li></a>
            <a href="/About"><li>About</li></a>
            <a href="/Reservations"><li>Reservations</li></a>
            <a href="/Order online"><li>Order online</li></a>
            <a href="/Login"><li>Login</li></a>
        </ul>
      </div>
    );
  }

export default Nav;