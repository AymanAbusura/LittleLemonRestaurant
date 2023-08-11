import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const BookingForm2 = () => {
    // const [agreed, setAgreed] = useState("");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("Date");
    const [email, setEmail] = useState("Time");
    const [phone, setPhone] = useState("No. of Guests");

    const onChangeFname = e => {
        setFname(e.target.value);
    }
    const onChangeLname = e => {
        setLname(e.target.value);
    }
    const onChangeEmail = e => {
        setEmail(e.target.value);
    }
    const onChangePhone = e => {
        setPhone(e.target.value);
    }

    return (
        <section>
        <Nav />
        <div>
        <form className='form1' id="myform2">
            <div>
                <div>
                    <div>
                        <label htmlFor="fname">* First Name</label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='fname'
                            id='fname'
                            value={fname}
                            autoComplete="off"
                            className='box1'
                            onChange={onChangeFname}
                            required
                        />
                    </div>
                </div>
                <div className='lastnamediv'>
                    <div>
                        <label htmlFor="lname">* Last Name</label>
                    </div>
                    <div>
                        <input 
                            type="text"
                            name='lname'
                            id='lname'
                            value={lname}
                            className='box1'
                            onChange={onChangeLname}
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="email">* Email</label>
                    </div>
                    <div>
                        <input 
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            className='box1'
                            onChange={onChangeEmail}
                            required
                        />
                    </div>
                </div>
                <div className='phonediv'>
                    <div>
                        <label htmlFor="phone">* Phone Number</label>
                    </div>
                    <div>
                        <input 
                            type="tel"
                            name='phone'
                            id='phone'
                            value={phone}
                            className='box1'
                            onChange={onChangePhone} 
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Details</label>
                    </div>
                    <div>
                    </div>
                    <label>
                        {/* <input type='radio' value={agreed} required/> */}
                        <input type='radio' required/>
                        You agree to our friendly <u>privacy policy</u>
                    </label>
                </div>
                <div className='speciallabeldiv'>
                    <div>
                        <label>Special Request</label>
                    </div>
                    <div>
                        <textarea 
                            type="text"
                            className='box1'
                        />
                    </div>
                </div>
            </div>
        </form>
        </div>
        <div>
                <div className='card2'>
                    <div>
                        <img src={restaurant} alt="restaurant" className='cardimages2'/>
                    </div>
                    <div>
                        <img src={chefB} alt="chef" className='cardimages2'/>
                    </div>
                    <div>
                        <img src={restaurantfood} alt="restaurantfood" className='cardimages2'/>
                    </div>
                    {/* <div>
                        <button className='button3' onClick={navigateToBookFrom2}>Reserve a Table</button>
                    </div> */}
                </div>
                <div className='buttondiv'>
                    <button type="submit" className='button3' form='myform1'>Reserve a Table</button>
                    {/* <button className='button3' form='myform' onClick={navigateToBookForm2}>Reserve a Table</button> */}
                </div>
            </div>
        <Footer />
        </section>
    );
}

export default BookingForm2;