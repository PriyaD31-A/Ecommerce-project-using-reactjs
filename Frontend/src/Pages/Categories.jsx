import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nava from '../Components/Nava';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

import { SlHeart } from "react-icons/sl";
import Footer from '../Components/Footer'
import Categoriescard from './Categoriescard';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

const Categories = () => {
  const imageurl4 = './src/Pages/style3'
  const imageurl5 = './src/assets/men2.jpg'
 
  return (
    <div>
        <Nava/>

    <div className=" categories2">
      <Navbar expand="lg">
        <Container className="justify-content-between">
          <Nav className="d-flex flex-wrap justify-content-around w-100">

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdQn4JRqVQ0m2iWZbv0qIZRwcF4SVaT6HnQ&s"
                   style={{borderRadius:"50%"}}   className="nav-icon" /> Women Sarees
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/typee1">Fancy Sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee2">Silk Sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee3">Georgette Sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee4">Cotton Sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee5">Chiffon Sarees</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIlTV_zNQSRB1Fisw6nPwNLnyn55z9RwGMw&s"
                 style={{borderRadius:"50%"}} className="nav-icon" /> Kurtis & Western
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/typee6">Anarkalis</NavDropdown.Item>
              <NavDropdown.Item href="/typee7">Aliyacut</NavDropdown.Item>
              <NavDropdown.Item href="/typee8">Organza Kurti</NavDropdown.Item>
              <NavDropdown.Item href="/typee9">Material Set</NavDropdown.Item>
              <NavDropdown.Item href="/typee10">Lehenga</NavDropdown.Item>
              <NavDropdown.Item href="/typee11">Tops</NavDropdown.Item>
              <NavDropdown.Item href="/typee12">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee13">Jumpsuits</NavDropdown.Item>
              <NavDropdown.Item href="/typee14">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee15">Jeans</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5FHZRoKmmhDFYGfzZzF_Y4sFjUeecfogSw&s"
                  style={{borderRadius:"50%"}}   className="nav-icon" /> Men Wears
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/Typee16">Shirt</NavDropdown.Item>
              <NavDropdown.Item href="/Typee17">T-shirt</NavDropdown.Item>
              <NavDropdown.Item href="/Typee18">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="/Typee19">Jeans and Cotton</NavDropdown.Item>
              <NavDropdown.Item href="/Typee20">Coat Suit</NavDropdown.Item>
              <NavDropdown.Item href="/Typee21">Traditional Kurta</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFPSDGyJAXjSXpV5p9BrTWftuiKrJ4gvhnQ&s"
                  style={{borderRadius:"50%"}}  
                   className="nav-icon" /> Boys Kids Wears
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/typee22">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee23">Boys Setdress</NavDropdown.Item>
              <NavDropdown.Item href="/typee24">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="/typee25">Winter Wear</NavDropdown.Item>
              <NavDropdown.Item href="/typee26">Traditional Wear</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjVKV9S_WYufnOPa4iiCQlh2gPkH_N-VG7w&s" 
                  style={{borderRadius:"50%"}} 
                  className="nav-icon" /> Girls Ethnic Wears
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/typee27">Girls Gown</NavDropdown.Item>
              <NavDropdown.Item href="/typee28">Lehenga</NavDropdown.Item>
              <NavDropdown.Item href="/typee29">Salwar Suits</NavDropdown.Item>
              <NavDropdown.Item href="/typee30">Aarika Sets</NavDropdown.Item>
              <NavDropdown.Item href="/typee31">Kurtis</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={
                <>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbj5AvRvgket1kLmcIhJ_5PMWXnkHuhfF-Yg&s" 
                  style={{borderRadius:"50%"}}  
                  className="nav-icon"  /> Girls western
                </>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/typee32">Girls midi</NavDropdown.Item>
              <NavDropdown.Item href="/typee33">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee34">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="/typee35">Party wears</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </div>

        <div className='container'>
          <div className='row mt-5'>
            <div className='backimg'><h1 class="text-white categories1 img-fluid">Categories</h1></div>
          </div>
        </div>






{/* <div>
<div class="container-fluid category">
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 ms-2 gy-5'>
        {
          Images4.map((user2) =>(
            <div className='col'>
                    <img src={user2.img} alt="not found" className='img-fluid img-top' height="300px"  width="300px"/>
                    <p className="text1 mt-3 fs-4">{user2.name}</p>
              </div>

          ))
        }
      </div>
  </div>
</div>
</div> */}


<Categoriescard/>




<Footer/>

</div>

)
}

export default Categories
