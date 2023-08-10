import React from 'react';
import { useState } from 'react';

const BookingForm = () => {

const [date, setDate] = useState("black");
// const [guests, setGuests] = useState("");
const [seating, setSeating] = useState("");

const onOptionChange = e => {
    setSeating(e.target.value)
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
        <form className='form'>
                <label>Indoor seating 
                    <input 
                        type="radio" 
                        name='Indoor'
                        id='Indoor'
                        value="Indoor"
                        required
                        checked={seating === "Indoor"}
                        onChange={onOptionChange}
                    />
                </label>
                <label className='label2'>Outdoor seating 
                    <input 
                        type="radio" 
                        name='Outdoor'
                        id='Outdoor'
                        value="Outdoor" 
                        required
                        checked={seating === "Outdoor"}
                        onChange={onOptionChange}
                    />
                </label>
            <div className='info'>
                <div>
                    <div>
                        <label for="res-date">Date</label>
                    </div>
                    <div>
                        <input 
                            type="date"
                            name='res-date'
                            id="res-date" 
                            className='box'
                            required
                            value={date} 
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className='labelsdiv1'>
                    <div>
                        <label for="res-time">Time</label>
                    </div>
                    <div>
                        <select name='res-time' id="res-time" className='box' required>
                            <option selected disabled hidden>Select Time</option>
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
                        <label for="guests">Number of guests</label>
                    </div>
                    <div>
                        <select name='guests' id="guests" className='box' required>
                            <option selected disabled hidden>No. of Diners</option>
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
                        <label for="occasion">Occasion</label>
                    </div>
                    <div>
                        <select name='Occasion' id="Occasion" className='box' required>
                            <option selected disabled hidden>Occasion</option>
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BookingForm;