import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { 
    Box, 
    Button, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Input,  
    Textarea,
   } from "@chakra-ui/react"; 
import { useFormik } from "formik";
import * as Yup from 'yup';

function BookingSlot () {
    const formik = useFormik({ 
        initialValues: { 
          firstName: "", 
          lastName:"",
          phone: "",
          email: "", 
          specialRequest: "", 
        }, 
        onSubmit: (values) => { 
            console.log(values);
            alert(`Your Reservation has been confirmed check your email`)
        }, 
        validationSchema: Yup.object({ 
          firstName: Yup.string().required("Required"), 
          lastName: Yup.string().required("Required"), 
          phone: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"), 
          specialRequest: Yup.string().min(25, "Must be at least 25 characters"), 
        }), 
      });

    return (
        <section>
            <Nav />
            <div>
                <Box>
                    <form className='form1' id="myform2" onSubmit={formik.handleSubmit}>
                        <div className='formdiv'>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName} style={{padding:"10px"}}>
                                <FormLabel htmlFor="firstName">* First Name</FormLabel>
                                <Input 
                                    id="firstName" 
                                    name="firstName"
                                    type="text"
                                    style={{height:"30px",width:"100%"}}
                                    {...formik.getFieldProps("firstName")} 
                                /> 
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
                            </FormControl> 
                            <FormControl isInvalid={!!formik.errors.lastName && formik.touched.lastName} style={{padding:"10px"}}>
                                <FormLabel htmlFor="lastName">* Last Name</FormLabel>
                                <Input 
                                    id="lastName" 
                                    name="lastName"
                                    type="text" 
                                    style={{height:"30px",width:"100%"}}
                                    {...formik.getFieldProps("lastName")} 
                                /> 
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage> 
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email} style={{padding:"10px"}}>
                                <FormLabel htmlFor="email">* Email Address</FormLabel> 
                                <Input 
                                    id="email" 
                                    name="email" 
                                    type="email"
                                    style={{height:"30px",width:"100%"}}
                                    {...formik.getFieldProps("email")} 
                                /> 
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone} style={{padding:"10px"}}>
                                <FormLabel htmlFor="phone">* Phone Number</FormLabel> 
                                <Input 
                                    id="phone" 
                                    name="phone" 
                                    type="tel" 
                                    style={{height:"30px",width:"100%"}}
                                    {...formik.getFieldProps("phone")} 
                                /> 
                                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage> 
                            </FormControl>
                            <FormControl style={{padding:"10px"}}>
                                <FormLabel htmlFor="email">Special Request</FormLabel> 
                                <Textarea 
                                    id="specialRequest" 
                                    name="specialRequest"
                                    style={{height:"30px",width:"100%"}}
                                    {...formik.getFieldProps("specialRequest")} 
                                />
                            </FormControl>
                            <FormControl style={{padding:"10px"}}>
                                {/* <FormLabel htmlFor="phone">Date</FormLabel>
                                <FormLabel htmlFor="email">Special Request</FormLabel> 
                                <span className='detail_span_p' required>{location.state.date}</span>
                                <span className='detail_span_p detail_span'>{location.state.guests}</span>
                                <br></br>
                                <span className='detail_span_p'>{location.state.availableTimes}</span>
                                <span className='detail_span_p detail_span1'>{location.state.occasion}</span>
                                <p className='detail_span_p detail_span2'>{location.state.seating}</p>
                                <div className='detail_span3'><input type='radio' required/>You agree to our friendly <u>privacy policy</u></div> */}
                            </FormControl>
                        </div>
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
                    <Button className='button3' type="submit" form='myform2'>Reserve a Table</Button>
                    {/* <button type="submit" className='button3' form='myform1'>Confirm Reservation</button>
                    <button className='button3' form='myform2' onClick={handleSubmit}>Reserve a Table</button>
                    <Button className='button3' type="submit" form='myform2'>Reserve a Table</Button>
                    <Button type="submit" className='button3' form='myform2' isLoading={isLoading}>Submit</Button> */}
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default BookingSlot;