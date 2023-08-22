import restaurant from './assets/restaurant.jpg';
import chefB from './assets/restaurant chef B.jpg';
import restaurantfood from './assets/restaurantfood.jpg';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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


function BookingSlot (props) {
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
            console.log();
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

      //to locate data from component BookingForm in BookingSlot
      const location = useLocation();
      const info = location.state;

      //To check date if empty and change Date format to "dd/mm/YYYY"
      const checkDate = info.resDate;
      const Empty = "Select Date";
      function isEmpty(value) {
        if (value === "") {
            return Empty;
        } 
        else {
            let date = new Date(value);
            date = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + (date.getMonth() + 1)+ '.' + date.getFullYear();
            return date;
        }
        }

        //To Navigate back to BookingForm to add date and changes data included in BookingSlot's form
        const navigate = useNavigate();
        function onClickBackToChoose() {
            navigate('/Reservation');
        }

    return (
        <section>
            <Nav />
            <div>
                <Box>
                    <form className='form1' id="myform2" onSubmit={formik.handleSubmit}>
                        <div className='formdiv'>
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName} style={{padding:"10px",width:"45%"}}>
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
                            <FormControl isInvalid={!!formik.errors.lastName && formik.touched.lastName} style={{padding:"10px",width:"45%"}}>
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
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email} style={{padding:"10px",width:"45%"}}>
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
                            <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone} style={{padding:"10px",width:"45%"}}>
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
                            <FormControl style={{padding:"10px",width: "45%"}}>
                                <button className='details' onClick={onClickBackToChoose}>{isEmpty(checkDate)}</button>
                                <button className='details detailsGuest'>{info.guest}</button>
                                <button className='details detailsResTime'>{info.resTime}</button>
                                <button className='details detailsOccasion'>{info.occasion}</button>
                                <div className='detailsAgreed'>
                                    <Input 
                                        type='radio' 
                                        name='agreed' 
                                        id='agreed' 
                                        value='agreed'
                                        required
                                    /> 
                                    You agree to our friendly <u>privacy policy</u>
                                </div>
                            </FormControl>
                            <FormControl style={{padding:"10px",width: "45%"}}>
                                <FormLabel htmlFor="email">Special Request</FormLabel> 
                                <Textarea 
                                    id="specialRequest" 
                                    name="specialRequest"
                                    style={{height:"50px",width:"100%"}}
                                    {...formik.getFieldProps("specialRequest")} 
                                />
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
                </div>
                <div className='buttondiv'>
                    <Button className='button3' type="submit" form='myform2'>Confirm Reservation</Button>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default BookingSlot;