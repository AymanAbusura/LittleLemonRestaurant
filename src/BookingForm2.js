import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import BookingSlot from './BookingSlot';
// import { useState } from 'react';
// import React, { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";

// const [state, setState] = useState({
//     Date: "",
//     Time: "",
//     NumberOfDiners: "",
//     Occasion: ""
//   });

// const navigate = useNavigate();
// const navigateToBookingForm2 = () => {
//   navigate('/BookingSlot', {state :{ 
//     // navigate('/BookingSlot', {state :{
    
//     date : date, 
//     seating : seating, 
//     availableTimes : availableTimes,
//     guests : guests,
//     occasion : occasion
// }});
// };

// Change fields Color onChange //
function ChangeInputDateColor(){
        var color = '#495E57';
        var fontcolor = 'white';
        document.getElementsByTagName('Input')[2].style.background=color;
        document.getElementsByTagName('Input')[2].style.color=fontcolor;
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

class BookingForm2 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: true,
            resDate:'',
            resTime: 'Time',
            guest: 'No. of Guests',
            occasion:'Occasion',
        };
    
        this.handleInputSeatingChange = this.handleInputSeatingChange.bind(this);
        this.handleInputDateChange = this.handleInputDateChange.bind(this);
        this.handleSelectTimeChange = this.handleSelectTimeChange.bind(this);
        this.handleSelectGuestChange = this.handleSelectGuestChange.bind(this);
        this.handleSelectOccasionChange = this.handleSelectOccasionChange.bind(this);
      }
      handleInputSeatingChange(e) {
        // console.log(e.target.value);
        this.setState({
            selectedOption: e.target.value
          });
      }
      handleInputDateChange(e) {
        // console.log(e.target.value);
        ChangeInputDateColor();
        this.setState({
            resDate: e.target.value
          });
      }
      handleSelectTimeChange(e) {
        // console.log(e.target.value);
        ChangeSelectTimeColor();
        this.setState({
            resTime: e.target.value
          });
      }
      handleSelectGuestChange(e) {
        // console.log(e.target.value);
        ChangeSelectGuestColor();
        this.setState({
            guest: e.target.value
          });
      }
      handleSelectOccasionChange(e) {
        // console.log(e.target.value);
        ChangeSelectOccasionColor();
        this.setState({
            occasion: e.target.value
          });
      }
    //   handleSelectChange(e) {

        // this.setState({
        //     resDate: e.target.value,
        //   });
        // const target = e.target;
        // const value = target.type === 'radio' ? target.checked : target.value;
        // const name = target.name;
    
        // this.setState({
        //   [name]: value
        // });
    //   }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    alert('Success: ' + this.state);
    event.preventDefault();
  }

    render() {
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
                            checked={this.state.selectedOption === 'Indoor'}
                            onChange={this.handleInputSeatingChange}
                        />
                        </label>
                        <label className='label2' htmlFor="outdoor">Outdoor seating 
                            <input 
                                type="radio" 
                                name='outdoor'
                                id='outdoor'
                                value="Outdoor"
                                checked={this.state.selectedOption === 'Outdoor'}
                                onChange={this.handleInputSeatingChange}
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
                                        value={this.state.resDate} 
                                        onChange={this.handleInputDateChange}
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
                                        value={this.state.resTime} 
                                        className='box'
                                        onChange={this.handleSelectTimeChange}
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
                                        value={this.state.guest} 
                                        className='box'
                                        onChange={this.handleSelectGuestChange}
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
                                        value={this.state.occasion} 
                                        className='box'
                                        onChange={this.handleSelectOccasionChange}
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
                    <button type="submit" className='button3' form='myform' onSubmit={this.handleSubmit}>Reserve a Table</button>
                    {/* <button type="submit" className='button3' form='myform' onClick={parentToChild}>Reserve a Table</button> */}
                    {/* <button type="submit" className='button3' form='myform' onClick={navigateToBookingForm2}>Reserve a Table</button> */}
                    {/* <button className='button3' form='myform' onClick={navigateToBookForm2}>Reserve a Table</button> */}
                </div>
            </div>
        </section>
    );
                }
}

export default BookingForm2;