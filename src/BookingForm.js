import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import { useState } from 'react';
// import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// const [state, setState] = useState({
//     Date: "",
//     Time: "",
//     NumberOfDiners: "",
//     Occasion: ""
//   });


const BookingForm = () => {

// constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     }

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
        // Time : "",
        // NumberOfDiners : "",
        // Occasion : ""
    // const info1 = info.map((item) => <p>{item}</p>);
    const navigate = useNavigate();
    const navigateToBookingForm2 = () => {
    //   navigate('/BookingForm2', {state :{ 
        navigate('/Reservation2', {state :{
        date : date, 
        seating : seating, 
        availableTimes : availableTimes,
        guests : guests,
        occasion : occasion
    }});
    };

    function changeColor1(){
        var color = '#495E57';
        var fontcolor = 'white';
        document.getElementsByTagName('Input')[2].style.background=color;
        document.getElementsByTagName('Input')[2].style.color=fontcolor;
    }

    function changeColor2(){
        var color = '#495E57';
        var fontcolor = 'white';
        document.querySelectorAll('Select')[0].style.background=color;
        document.querySelectorAll('Select')[0].style.color=fontcolor;
    }
    function changeColor3(){
        var color = '#495E57';
        var fontcolor = 'white';
        document.querySelectorAll('Select')[1].style.background=color;
        document.querySelectorAll('Select')[1].style.color=fontcolor;
    }
    function changeColor4(){
        var color = '#495E57';
        var fontcolor = 'white';
        document.querySelectorAll('Select')[2].style.background=color;
        document.querySelectorAll('Select')[2].style.color=fontcolor;
    }

    const [seating, setSeating] = useState("");
    const [date, setDate] = useState("Date");
    const [availableTimes, setavailableTimes] = useState("Time");
    const [guests, setGuests] = useState("No. of Guests");
    const [occasion, setOccasion] = useState("Occasion");

    // var availableTimes = [...availableTimes];
    // [availableTimes, setavailableTimes] = useState(["Time"]);

    const onOptionChangeSeating = e => {
        setSeating(e.target.value);
    }
    const onOptionChangeDate = e => {
        setDate(e.target.value);
        changeColor1();
    }
    var onOptionChangeAvailableTimes = e => {
        setavailableTimes(e.target.value);
        changeColor2();
    }
    const onOptionChangeGuests = e => {
        setGuests(e.target.value);
        changeColor3();
    }
    const onOptionChangeOccasion = e => {
        setOccasion(e.target.value);
        changeColor4();
    }

//   let yellow = '#ffc800';
//   const [color, setColor] = useState(yellow);
//    const changeColor = color => {
//       setColor(color);
//     }
//     useEffect(() => {
//         document.getElementsByClassName.backgroundColor = color;
//     },[color])

// const getIsFormValid = () => {
//     if (Indoor === "" || Outdoor === "") {
//       return false;
//     }
//     return true;
//   };

// const handleSubmit = (e) => {
//     e.preventDeafult();
//     console.log("Form Submitted!");
// };
    return (
        <section>
            <div className='Maindiv'>
                <div className='div1Main2'>
                    <h1 className='h5'> 
                        Reservations
                    </h1> 
                    <form className='form' id="myform">
                        <label htmlFor="indoor">Indoor seating 
                        <input 
                            type="radio" 
                            name='indoor'
                            id='indoor'
                            value="Indoor"
                            checked={seating === "Indoor"}
                            onChange={onOptionChangeSeating}
                        />
                        </label>
                        <label className='label2' htmlFor="outdoor">Outdoor seating 
                            <input 
                                type="radio" 
                                name='outdoor'
                                id='outdoor'
                                value="Outdoor"
                                checked={seating === "Outdoor"}
                                onChange={onOptionChangeSeating}
                            />
                        </label>
                        <div>
                            <div>
                                <div>
                                    <label htmlFor="res-date">Date</label>
                                </div>
                                <div>
                                    <input 
                                        type="date"
                                        name='res-date'
                                        id="res-date" 
                                        className='box'
                                        value={date} 
                                        onChange={onOptionChangeDate}
                                />
                                </div>
                            </div>
                            <div className='labelsdiv1'>
                                <div>
                                    <label htmlFor="res-time">Time</label>
                                </div>
                                <div>
                                    <select 
                                        name='res-time' 
                                        id="res-time" 
                                        value={availableTimes} 
                                        className='box'
                                        onChange={onOptionChangeAvailableTimes}
                                    >
                                        <option defaultValue disabled hidden>Time</option>
                                        <option value="17:00">17:00</option>
                                        <option value="18:00">18:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="20:00">20:00</option>
                                        <option value="21:00">21:00</option>
                                        <option value="22:00">22:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className='labelsdiv2'>
                                <div>
                                    <label htmlFor="guest">Number of guests</label>
                                </div>
                                <div>
                                    <select 
                                        name='guest' 
                                        id="guest" 
                                        value={guests} 
                                        className='box'
                                        onChange={onOptionChangeGuests}
                                    >
                                        <option defaultValue disabled hidden>No. of Guests</option>
                                        <option value="1 Diner">1 Diner</option>
                                        <option value="2 Diner">2 Diner</option>
                                        <option value="3 Diner">3 Diner</option>
                                        <option value="4 Diner">4 Diner</option>
                                        <option value="5 Diner">5 Diner</option>
                                        <option value="6 Diner">6 Diner</option>
                                        <option value="7 Diner">7 Diner</option>
                                        <option value="8 Diner">8 Diner</option>
                                        <option value="9 Diner">9 Diner</option>
                                        <option value="10 Diner">10 Diner</option>
                                    </select>
                                </div>
                            </div>
                            <div className='labelsdiv3'>
                                <div>
                                    <label htmlFor="Occasion">Occasion</label>
                                </div>
                                <div>
                                    <select 
                                        name='Occasion' 
                                        id="Occasion" 
                                        value={occasion} 
                                        className='box'
                                        onChange={onOptionChangeOccasion}
                                    >
                                        <option defaultValue disabled hidden>Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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
                    <button type="submit" className='button3' form='myform' onClick={navigateToBookingForm2}>Reserve a Table</button>
                    {/* <button className='button3' form='myform' onClick={navigateToBookForm2}>Reserve a Table</button> */}
                </div>
            </div>
        </section>
    );
}

export default BookingForm;