


import React, { useState } from 'react';
import Nava from '../Components/Nava';
import Button from 'react-bootstrap/Button';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import Reviews from './Reviews';
import Footer from '../Components/Footer';
import Card1 from './Card1';
import Traditionalcard from './Traditionalcard';
import Searchbox from './Searchbox';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [cart, setCart] = useState([]);  // Cart state
  const [warning,setWarning] = useState(false)
 

  // Function to handle adding items to cart
  const handleClick = (item) => {
    // setCart((prevCart) => [...prevCart, item]); // Add new item to cart
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent){
      setWarning(true)
      setTimeout(()=> {
         setWarning(false)
    },2000)
    return;
  }
    setCart([...cart, item]);

  };

  const imageurl = './src/Pages/topimg10.png';
  const imageurl3 = './src/pages/style3.png';

  return (
    <div className='row'>          
      {/* Pass cart count to Nava */}
      <Nava cartCount={cart.length} /> 
      
      <div className='col-sm-6 bg'>
        <img src={imageurl} className='img-fluid mt-2' id="img1" alt="not found" /> 
      </div>

      <div className='col-md-6 bg'>
        <div className='frontview ps-4'> 
          <h1 id="con1">Find Your</h1>
          <h1 id="con8">Fashion bliss!!</h1>
          <Button id="con3" variant="danger" onClick={() => navigate('Categories')}>Shop now</Button>
        </div>
      </div>

      <Searchbox setSearch={setSearch} setSearch1={setSearch1}/> 
      {
        warning    && <span className='warning mt-3'>Item is alraedy added to your card</span>
      } 

      {/* Pass handleClick function to Card1 */}
      <Card1 search={search} 
      handleClick={handleClick}
      cart = {cart} setCart={setCart} />
      
      <Traditionalcard search1={search1}/>

      <div className='container-fluid ms-1'>
        <div className='container mt-5'>
          <div className='row border1 border2'>
            <div className='col-md-6'>
              <img src={imageurl3} className="img-fluid imageup" alt="not found" />
            </div>

            <div className='col-md-6'>
              <h1 className='con6'>..Elevant Your Style,</h1>
              <h1 className='con7'>Embrace Your Unique<center className='con8'>Style!!</center></h1>
              <Button id="con9" variant="danger" onClick={() => navigate('/Offers')}>New collections and offers</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Return Policies Section */}
      <div className='container-fluid ms-1'>
        <div className='container top'>
          <div className='row gy-2 d-flex justify-content-center justify-content-sm-between justify-content-md-between'>
            <div className='col-12 col-sm-3 col-md-3 border4'>
              <FaArrowRightArrowLeft className='borderr'/>
              <div className='return'>7 DAYS RETURN</div>
              <p className='mt-3 return1'>Simply return it within 7 days</p>
            </div>

            <div className='col-12 col-sm-3 border4'>
              <FaTruckArrowRight className='borderr' />
              <div className='return'>FREE US DELIVERY</div>
              <p className='mt-3 return1'>On orders over $200!</p>
            </div>  

            <div className='col-12 col-sm-3 border4'>
              <GiTakeMyMoney className='borderr' />
              <div className='return'>CASH ON DELIVERY</div>
              <p className='mt-3 return1'>Cash on delivery is available</p>
            </div>
          </div>
        </div>
      </div>

      <Reviews/>

      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='input1 text-center'>
                <h1 className='input2 pt-5'>Get Our Latest Offers & News</h1>
                <h4 className='input3 mt-5 fw-bold'>Join with Us</h4>
                <input type="text" placeholder='Enter your email id' id="input4" />
                <Button id="con12" variant="dark">Shop now</Button>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <Footer/>
    </div>    
  );
};

export default Home;







