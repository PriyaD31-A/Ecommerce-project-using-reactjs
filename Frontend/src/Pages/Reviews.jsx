import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Components/ExampleCarouselImage';
import { IoStarOutline } from "react-icons/io5";
// import ExampleCarouselImage from 'react-bootstrap/ExampleCarouselImage';


function Reviews() {
  return (
    <div class="container-fluid">
      <div className='container'> 
    <h1 className='custom'>FROM OUR CUSTOMERS</h1>
    <Carousel className='mt-5'>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage />
        <Carousel.Caption className='mt-2'>
          <h3 className='star'><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></h3>
          <h1 className='mt-4'>🧕</h1>
          <h5 className='review1 mt-5'>Christina M. /From Chennai</h5>
          <p class="review2">Clothing are addicting! Premium formal wear with excellent finishing and materials</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage/>
        <Carousel.Caption className='mt-2'>
        <h3 className='star'><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></h3>
          <h1 className='mt-4'>🤵</h1>
          <h5 className='review1 mt-5'>Krish S. /From Delhi</h5>
          <p class="review2">Best Purchase I have made this winter! Known for durability and elegant style.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage/>
        <Carousel.Caption className='mt-2'>
        <h3 className='star'><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></h3>
          <h1 className='mt-4'>👮‍♀️</h1>
          <h5  className='review1 mt-5'>Sara K. /From Bangalore</h5>
          <p class="review2">Affordable, sleek, and professional-looking attire Thankyou shinycart</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default Reviews;