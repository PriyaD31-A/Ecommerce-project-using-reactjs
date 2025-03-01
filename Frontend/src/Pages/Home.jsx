import React, { useState } from 'react'
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
import Categories from './Categories';


const Home = () => {
  const [search,setSearch] = useState("")
  const [search1,setSearch1] = useState("")
  
  const imageurl = './src/Pages/topimg10.png'
  const imageurl3 = './src/pages/style3.png'
  return (
    <div className='row bg'>
      <Nava/>

    {/* <Searchbox setSearch = {setSearch}
      setSearch1 = {setSearch1}/>  */}

      {/* <Categories/> */}
      
       <div className='col-sm-6'>
      <Searchbox setSearch = {setSearch}
      setSearch1 = {setSearch1}/> 
      
      <img src={imageurl} className='img-fluid mt-2' id="img1" alt="not found" /> 
    </div>

    <div className='col-md-6'>
      <div className='frontview ps-4'> 
       
        <h1 id="con1">Find Your</h1>
        <h1 id="con8">Fashion bliss!!</h1>
        <Button id="con3" variant="danger">Shop now</Button>
        </div>
    
    </div>
  

  <Card1 search = {search}/>

<div className='container-fluid ms-1'>
  <div className='container mt-5'>
    <div className='row border1 border2'>
      <div className='col-md-6'>
        <img src={imageurl3} class="img-fluid imageup" alt="not found" />
      </div>

      <div className='col-md-6'>
         <h1 className='con6'>..Elevant Your Style,</h1>
         <h1 className='con7'>Embrace Your Unique<center className='con8'>Style!!</center></h1>
         <Button id="con9" variant="danger">New collections</Button>
      </div>
         
    </div>
  </div>
</div>



  <Traditionalcard search1 = {search1}/>

{/* return */}

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
        <h1 className='input2 pt-5'>Get Our Latest offers News</h1>
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

  )
}


export default Home
