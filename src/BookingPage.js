import React from 'react';
import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import BookingForm from './BookingForm';

const handleSubmit = (e) => {
    e.preventDeafult();
    console.log("Form Submitted!");
};

function BookingPage() {
    return (
        <section>
            <div className='Maindiv'>
                <div className='div1Main'>
                    <h1 className='h5'>
                        Reservations
                    </h1>
                    <BookingForm />
                </div>
            </div>
            <div className='card'>
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
                <button className='button3' onClick={handleSubmit}>Reserve a Table</button>
            </div>
        </section>
    );
}
export default BookingPage;