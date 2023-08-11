import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import { useState } from 'react';
// import React, { useEffect } from 'react';


const BookingForm = () => {

    // const [color, setColor] = useState("blue");

    // const styleBox = color => {
    //     setColor(color);
    // }
    // useEffect(() => {
    //     document.getElementsByClassName('box').style.backgroundColor = color;
    // },[color])

    const [seating, setSeating] = useState("");
    const [date, setDate] = useState("Date");
    const [time, setTime] = useState("Time");
    const [guests, setGuests] = useState("No. of Guests");
    const [occasion, setOccasion] = useState("Occasion");

    const onOptionChangeSeating = e => {
        setSeating(e.target.value);
    }
    const onOptionChangeTime = e => {
        setTime(e.target.value);
    }
    const onOptionChangeGuests = e => {
        setGuests(e.target.value);
    }
    const onOptionChangeOccasion = e => {
        setOccasion(e.target.value);
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
                        <label>Indoor seating 
                        <input 
                            type="radio" 
                            name='Indoor'
                            id='Indoor'
                            value="Indoor"
                            checked={seating === "Indoor"}
                            onChange={onOptionChangeSeating}
                        />
                        </label>
                        <label className='label2'>Outdoor seating 
                            <input 
                                type="radio" 
                                name='Outdoor'
                                id='Outdoor'
                                value="Outdoor"
                                checked={seating === "Outdoor"}
                                onChange={onOptionChangeSeating}
                            />
                        </label>
                        <div className='info'>
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
                                        onChange={(e) => setDate(e.target.value)}
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
                                        value={time} 
                                        className='box'
                                        onChange={onOptionChangeTime}
                                    >
                                        <option defaultValue disabled hidden>Time</option>
                                        <option>17:00</option>
                                        <option>18:00</option>
                                        <option>19:00</option>
                                        <option>20:00</option>
                                        <option>21:00</option>
                                        <option>22:00</option>
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
                                        <option>1 Diner</option>
                                        <option>2 Diner</option>
                                        <option>3 Diner</option>
                                        <option>4 Diner</option>
                                        <option>5 Diner</option>
                                        <option>6 Diner</option>
                                        <option>7 Diner</option>
                                        <option>8 Diner</option>
                                        <option>9 Diner</option>
                                        <option>10 Diner</option>
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
                                        <option>Birthday</option>
                                        <option>Engagement</option>
                                        <option>Anniversary</option>
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
                <button type="submit" className='button3' form='myform'>Reserve a Table</button>
                {/* <button className='button3' form='myform' onClick={navigateToBookForm2}>Reserve a Table</button> */}
            </div>
        </div>
        </section>
    );
}

export default BookingForm;