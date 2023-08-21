import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Change fields Color onChange //
function ChangeinputDateColor(){
        var color = '#495E57';
        var fontcolor = 'white';
        document.getElementsByTagName('input')[2].style.background=color;
        document.getElementsByTagName('input')[2].style.color=fontcolor;
}
function ChangeSelectTimeColor(){
    var color = '#495E57';
    var fontcolor = 'white';
    document.querySelectorAll('Select')[0].style.background=color;
    document.querySelectorAll('Select')[0].style.color=fontcolor;
}

function ChangeSelectGuestColor(){
    var color = '#495E57';
    var fontcolor = 'white';
    document.querySelectorAll('Select')[1].style.background=color;
    document.querySelectorAll('Select')[1].style.color=fontcolor;
}

function ChangeSelectOccasionColor(){
    var color = '#495E57';
    var fontcolor = 'white';
    document.querySelectorAll('Select')[2].style.background=color;
    document.querySelectorAll('Select')[2].style.color=fontcolor;
}

function BookingForm2 () {
    const [state, setState] = useState({
        selectedOption: true,
        resDate: "",
        resTime: "Time",
        guest: "No. of Guests",
        occasion: "Occasion"
    });
    
    // functions to handle form changes //
    function handleinputSeatingChange(e) {
        setState({
            ...state,
            selectedOption: e.target.value,
        });
    }
    
    function handleInputDateChange(e) {
        setState({
            ...state,
            resDate: e.target.value,
        });
        ChangeinputDateColor();
    }

    function handleSelectTimeChange(e) {
        setState({
            ...state,
            resTime: e.target.value,
        });
        ChangeSelectTimeColor();
    }

    function handleSelectGuestChange(e) {
        setState({
            ...state,
            guest: e.target.value,
        });
        ChangeSelectGuestColor();
    }

    function handleSelectOccasionChange(e) {
        ChangeSelectOccasionColor();
        setState({
            ...state,
            occasion: e.target.value,
        });
    }
    
    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(state);
        navigate('/BookingSlot', {state});
    }
    return (
        <>
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
                            checked={state.selectedOption === 'Indoor'}
                            onChange={handleinputSeatingChange}
                        />
                        </label>
                        <label className='label2' htmlFor="outdoor">Outdoor seating 
                            <input 
                                type="radio" 
                                name='outdoor'
                                id='outdoor'
                                value="Outdoor"
                                checked={state.selectedOption === 'Outdoor'}
                                onChange={handleinputSeatingChange}
                            />
                        </label>
                        <div>
                            <div>
                                <div>
                                    <label htmlFor="resDate">Date</label>
                                </div>
                                <div>
                                    <input 
                                        type="date"
                                        name='resDate'
                                        id="resDate" 
                                        className='box'
                                        value={state.resDate}
                                        onChange={handleInputDateChange}
                                />
                                </div>
                            </div>
                            <div className='labelsdiv1'>
                                <div>
                                    <label htmlFor="resTime">Time</label>
                                </div>
                                <div>
                                    <select 
                                        name='resTime' 
                                        id="resTime" 
                                        className='box'
                                        value={state.resTime}
                                        onChange={handleSelectTimeChange}
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
                                        className='box'
                                        value={state.guest}
                                        onChange={handleSelectGuestChange}
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
                                    <label htmlFor="occasion">Occasion</label>
                                </div>
                                <div>
                                    <select 
                                        name='occasion' 
                                        id="occasion" 
                                        className='box'
                                        value={state.occasion}
                                        onChange={handleSelectOccasionChange}
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
                </div>
                <div className='buttondiv'>
                    <button type="submit" className='button3' form='myform' onClick={handleSubmit}>Reserve a Table</button>
                </div>
            </div>
        </section>
        </>
    );
};

export default BookingForm2;