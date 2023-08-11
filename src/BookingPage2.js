import React from 'react';
import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import BookingForm2 from './BookingForm2';
import { useNavigate } from "react-router-dom";

function BookingPage() {
    const navigate = useNavigate();
    const navigateToBookingForm2 = () => {
      navigate('/');
      navigate('/BookingForm2');
    };
    return (
        <section>
            <div className='Maindiv'>
                <div className='div1Main2'>
                    <h1 className='h5'> 
                        Reservations
                    </h1> 
                    <BookingForm2 />
                </div>
            </div>
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
                <button className='button3' onClick={navigateToBookingForm2}>Confirm Reservation</button>
            </div>
        </section>
    );
}
export default BookingPage;