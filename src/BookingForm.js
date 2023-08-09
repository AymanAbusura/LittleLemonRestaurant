import React from 'react';
import { useState } from 'react';

const BookingForm = () => {

const [date, setDate] = useState("");
const [guests, setGuests] = useState("");
const [seating, setSeating] = useState("");

const onOptionChange = e => {
    setSeating(e.target.value)
  }

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
        <form className='form'>
            {/* <div> */}
                <label>Indoor seating 
                    <input 
                        type="radio" 
                        value="Indoor" 
                        checked={seating === "Indoor"}
                        onChange={onOptionChange}
                    />
                </label>
                <label>Outdoor seating 
                    <input 
                        type="radio" 
                        value="Outdoor" 
                        checked={seating === "Outdoor"}
                        onChange={onOptionChange}
                    />
                </label>
            {/* </div> */}
            <div className='info'>
            <label for="res-date">Date</label>
                <input 
                    type="date" 
                    id="res-date" 
                    className='box'
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                />
            <label for="res-time">Time</label>
                <select id="res-time " className='box'>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            <label for="guests">Number of guests</label>
                <input 
                    type="int" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    className='box'
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                />
            <label for="occasion">Occasion</label>
                <select id="Occasion" className='box'>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                </select>
            </div>
        </form>
    );
}

export default BookingForm;