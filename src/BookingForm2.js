import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function BookingForm2 () {
    // const [agreed, setAgreed] = useState("");

    const location = useLocation();
    console.log(location.state);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

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

    const handleSubmit = event => {
        var e = event.preventDefault();
        console.log(e);
        alert('Your Reservation has been confirmed check your email')
      }
    
    //   const navigate = useNavigate();
    // const navigateToBookingForm = () => {
    //     if(location.state.date === "Date")
    //         <BookingForm />
    // };

    return (
        <section>
        <Nav />
        <div>
        <form className='form1' id="myform2">
            <div className='formdiv'>
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
                            autoComplete="off"
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
                            autoComplete="off"
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
                            autoComplete="off"
                            className='box1'
                            onChange={onChangePhone} 
                            required
                        />
                    </div>
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
                <div className='detaildiv'>
                    <label>
                        <span className='detail_span_p' required>{location.state.date}</span>
                        <span className='detail_span_p detail_span'>{location.state.guests}</span>
                        <br></br>
                        <span className='detail_span_p'>{location.state.availableTimes}</span>
                        <span className='detail_span_p detail_span1'>{location.state.occasion}</span>
                        <p className='detail_span_p detail_span2'>{location.state.seating}</p>
                        {/* <input type='radio' value={agreed} required/> */}
                        <div className='detail_span3'><input type='radio' required/>You agree to our friendly <u>privacy policy</u></div>
                    </label>
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
                    {/* <button type="submit" className='button3' form='myform1'>Confirm Reservation</button> */}
                    <button className='button3' form='myform2' onClick={handleSubmit}>Reserve a Table</button>
                </div>
            </div>
        <Footer />
        </section>
    );
}

export default BookingForm2;