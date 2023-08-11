import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Reservation from './Reservation';
import BookingForm2 from './BookingForm2';
import OrderOnline from './OrderOnline';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Reservation' element={<Reservation />}></Route>
      <Route path='/BookingForm2' element={<BookingForm2 />}></Route>
      <Route path='/OrderOnline' element={<OrderOnline />}></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
