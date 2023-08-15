import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

import { 
    Box, 
    Button, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Heading, 
    Input, 
    Select, 
    Textarea, 
    VStack, 
   } from "@chakra-ui/react"; 
import { useFormik } from "formik";
import * as Yup from 'yup';
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
    const formik = useFormik({ 
        initialValues: { 
          firstName: "", 
          lastName:"",
          email: "", 
          comment: "", 
        }, 
        onSubmit: (values) => { 
         //  submit('https://jhon.com/contactme', values); 
         //  submit('https://Ayman.com/contactme', values); 
        }, 
        validationSchema: Yup.object({ 
          firstName: Yup.string().required("Required"), 
          lastName: Yup.string().required("Required"), 
          phone: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"), 
          specialRequest: Yup.string().min(25, "Must be at least 25 characters"), 
        }), 
      }); 
     
     useEffect(() => { 
        if (response) { 
          onOpen(response.type, response.message); 
          if (response.type === 'success') { 
            formik.resetForm(); 
          } 
        } 
      }, [response]); 

    return (
        <section>
        <Nav />
        <div>
        <Box>
        <form className='form1' id="myform2" onSubmit={formik.handleSubmit}>
        {/* <VStack> */}
            <div className='formdiv'>
                <div>
                    <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Input 
                            id="firstName" 
                            name="firstName"
                            type="text"  
                            {...formik.getFieldProps("firstName")} 
                        /> 
                        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
                    </FormControl> 
                </div>
                <div className='lastnamediv'>
                    <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Input 
                            id="lastName" 
                            name="lastName"
                            type="text" 
                            {...formik.getFieldProps("lastName")} 
                        /> 
                        <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage> 
                    </FormControl>
                </div>
                <div>
                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                        <FormLabel htmlFor="email">Email Address</FormLabel> 
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            {...formik.getFieldProps("email")} 
                        /> 
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
                    </FormControl> 
                </div>
                <div className='phonediv'>
                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                        <FormLabel htmlFor="email">Email Address</FormLabel> 
                        <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            {...formik.getFieldProps("phone")} 
                        /> 
                        <FormErrorMessage>{formik.errors.phone}</FormErrorMessage> 
                    </FormControl> 
                </div>
                <div className='speciallabeldiv'>
                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                        <FormLabel htmlFor="email">Special Request</FormLabel> 
                        <Textarea 
                            id="specialRequest" 
                            name="specialRequest"
                            {...formik.getFieldProps("specialRequest")} 
                        />
                    </FormControl> 
                    <div>
                        <textarea 
                            type="text"
                            name='specialRequest'
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
            {/* </VStack> */}
        </form>
        </Box>
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
                    {/* <button className='button3' form='myform2' onClick={handleSubmit}>Reserve a Table</button> */}
                    <Button type="submit" className='button3' form='myform2' isLoading={isLoading}> 
                        Submit 
                    </Button>
                </div>
            </div>
        <Footer />
        </section>
    );
}

export default BookingForm2;