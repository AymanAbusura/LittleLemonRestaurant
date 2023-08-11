import React from 'react';
import { useState } from 'react';

const BookingForm2 = () => {
    const [agreed, setAgreed] = useState("");

    return (
        <form className='form'>
            <div className='info'>
                <div>
                    <div>
                        <label for="fname">* First Name</label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='fname'
                            id='fname'
                            value="fname"
                            required
                        />
                    </div>
                </div>
                <div className='labelsdiv1'>
                    <div>
                        <label for="lname">* Last Name</label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='lname'
                            id='lname'
                            value="lname" 
                            required
                        />
                    </div>
                </div>
                <div className='labelsdiv2'>
                    <div>
                        <label for="email">* Email</label>
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name='email'
                            id='email'
                            value="email" 
                            required
                        />
                    </div>
                </div>
                <div className='labelsdiv3'>
                    <div>
                        <label for="Phone">* Phone Number</label>
                    </div>
                    <div>
                        <input 
                            type="tel" 
                            name='phone'
                            id='phone'
                            value="phone" 
                            required
                        />
                    </div>
                </div>
                <div className='labelsdiv4'>
                    <div>
                        <label for="occasion">* Phone Number</label>
                    </div>
                    <div>
                        <input 
                            type="tel" 
                            name='phone'
                            id='phone'
                            value="phone" 
                            required
                        />
                    </div>
                    <label>
                        <input type='radio' value={agreed} required/>
                        You agree to our friendly <a href='/'>privacy policy</a>
                    </label>
                </div>
                <div className='labelsdiv5'>
                    <div>
                        <label for="Special-request">Special Request</label>
                    </div>
                    <div>
                        <textarea 
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BookingForm2;