import restaurantfood from './assets/restaurantfood.jpg';
import greekSalad from './assets/greekSalad.jpg';
import bruchetta from './assets/bruchetta.png';
import lemonDessert from './assets/lemonDessert.jpg';
import deliveryIcon from './assets/deliveryIcon.svg';
import Karla from './assets/Karla.png';
import Jhon from './assets/Jhon.png';
import Laura from './assets/Laura.png';
import Danil from './assets/Danil.png';
import chefs1 from './assets/Mario_and_Adrian_B.png';
import chefs2 from './assets/Mario_and_Adrian_A.png';
import React from 'react';


function HomePage() {
    return (
      <section>
        <div className='Main'>
          <div className='div1Main'>
            <h1 className='h1'>
              Little Lemon
              <p>Chicago</p>
            </h1>
            <p className='paragraph1'>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modren twist.</p>
          <button className='button1'>Reserve Table</button>
          </div>
          <img src={restaurantfood} alt="restaurantfood" className='restaurantfood'/>
        </div>
        <div>
          <div className='cardheader'>
            <h2>This weeks specials!</h2>
            <button className='button2'>Online order</button>
          </div>
          <div className='card'>
            <div>
              <img src={greekSalad} alt="greekSalad" className='cardimages'/>
              <div className='cardblocks'>
                <div className='cardblocks1'>
                  <h3>Greek Salad</h3>
                  <span className='price'>$12.99</span>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.</p>
                <div className='cardblocks2'>
                  <span>Order a delivery <img src={deliveryIcon} alt='deliveryIcon'/></span>
                </div>
              </div>
            </div>
            <div>
              <img src={bruchetta} alt="bruchetta" className='cardimages'/>
              <div className='cardblocks'>
                <div className='cardblocks1'>
                  <h3>Bruchetta</h3>
                  <span className='price'>$5.99</span>
                </div>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div className='cardblocks2'>
                  <span>Order a delivery <img src={deliveryIcon} alt='deliveryIcon'/></span>
                </div>
              </div>
            </div>
            <div>
              <img src={lemonDessert} alt="lemonDessert" className='cardimages'/>
              <div className='cardblocks'>
                <div className='cardblocks1'>
                  <h3>Lemon Dessert</h3>
                  <span className='price'>$5.00</span>
                </div>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className='cardblocks2'>
                  <span>Order a delivery <img src={deliveryIcon} alt='deliveryIcon'/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='testimonials'>
          <h1 className='h1testimonials'>Testimonials</h1>
          <div className='group'>
          <div className='testimonialsblock'>
            <span>Rating</span>
            <br></br>
            <img src={Karla} alt='Karla' className='testimonialsimg'/>
            <p>Karla</p>
            <p>Review rext</p>
          </div>
          <div className='testimonialsblock'>
            <span>Rating</span>
            <br></br>
            <img src={Jhon} alt='Jhon' className='testimonialsimg'/>
            <p>Jhon</p>
            <p>Review rext</p>
          </div>
          <div className='testimonialsblock'>
            <span>Rating</span>
            <br></br>
            <img src={Laura} alt='Laura' className='testimonialsimg'/>
            <p>Laura</p>
            <p>Review rext</p>
          </div>
          <div className='testimonialsblock'>
            <span>Rating</span>
            <br></br>
            <img src={Danil} alt='Danil' className='testimonialsimg'/>
            <p>Danil</p>
            <p>Review rext</p>
          </div>
          </div>
        </div>
        <div className='about'>
        <div className='div1Main'>
          <h4 className='h4'>
              Little Lemon
              <p>Chicago</p>
          </h4>
            <p className='paragraph2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          <div className='divchefs'>
            <div>
              <img src={chefs1} alt='Mario and Adrian1' className='chefsimage1'/>
            </div>
            <div>
              <img src={chefs2} alt='Mario and Adrian2' className='chefsimage2'/>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  }

export default HomePage;