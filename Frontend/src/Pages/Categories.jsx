import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nava from '../Components/Nava';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { SlHeart } from "react-icons/sl";
import Footer from '../Components/Footer'
import Categoriescard from './Categoriescard';

const Categories = () => {

  const imageurl4 = './src/Pages/western1.png'
  const imageurl5 = './src/assets/men2.jpg'
 
 
     const[Images4,SetImages] = useState([{
      img:"https://img.freepik.com/premium-photo/fashion-women_1303357-6361.jpg?uid=R179528585&ga=GA1.1.1840216468.1719552424&semt=ais_hybrid"
     },{
      img:"https://img.freepik.com/premium-photo/poster-winter-fashion-shows-women-wearing-winter-clothes_121452-2351.jpg?uid=R179528585&ga=GA1.1.1840216468.1719552424&semt=ais_hybrid"
     },{
      img:"https://img.freepik.com/premium-photo/fashion-women_1303357-6350.jpg?uid=R179528585&ga=GA1.1.1840216468.1719552424&semt=ais_hybrid"
     }
    ])

    
     
  return (
    <div>
        <Nava/>

     
        {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link><Link to="/Type1"><img src={imageurl4}></img></Link>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar> */}

           <Navbar>
            <Container>
              <Nav className='col-2'>
              <NavDropdown title="Women sarees" className="" id="basic-nav-dropdown">
               <NavDropdown.Item href="/typee1" width="200px">Fancy Sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee2">Silk sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee3">Georgette sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee4">Cotton sarees</NavDropdown.Item>
              <NavDropdown.Item href="/typee5">Chiffon sarees</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Women kurtis" className="ps-5" id="basic-nav-dropdown">
              <NavDropdown.Item href="/typee6" width="200px">Anarkalis</NavDropdown.Item>
              <NavDropdown.Item href="/typee7">Aliyacut</NavDropdown.Item>
              <NavDropdown.Item href="/typee8">Organza kurti</NavDropdown.Item>
              <NavDropdown.Item href="/typee9">Material set</NavDropdown.Item>
              <NavDropdown.Item href="/typee10">Lehenga</NavDropdown.Item>
            </NavDropdown>

           
            <NavDropdown title="Women western" className="ps-5" id="basic-nav-dropdown">
              <NavDropdown.Item href="/typee11" width="200px">Tops</NavDropdown.Item>
              <NavDropdown.Item href="/typee12">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee13">Jumpsuits</NavDropdown.Item>
              <NavDropdown.Item href="/typee14">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee15">Jeans</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Men wears" className="ps-5" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Typee16" width="200px">Shirt</NavDropdown.Item>
              <NavDropdown.Item href="/Typee17">T-shirt</NavDropdown.Item>
              <NavDropdown.Item href="/Typee18">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="/Typee19">Jeans and cotton</NavDropdown.Item>
              <NavDropdown.Item href="/Typee20">Coat suit</NavDropdown.Item>
              <NavDropdown.Item href="/Typee21">Traditional kurta</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Boys kids wears" className="ps-5" id="basic-nav-dropdown">
              <NavDropdown.Item href="/typee22" width="200px">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee23">Boys setdress</NavDropdown.Item>
              <NavDropdown.Item href="/typee24">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="/typee25">Winter wear</NavDropdown.Item>
              <NavDropdown.Item href="/typee26">Traditional wear</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Girls Ethnic wears" className="ps-5" id="basic-nav-dropdown">
              <NavDropdown.Item href="/typee27" width="200px">Girls Gown</NavDropdown.Item>
              <NavDropdown.Item href="/typee28">Lehanga</NavDropdown.Item>
              <NavDropdown.Item href="/typee29">Salwar suits</NavDropdown.Item>
              <NavDropdown.Item href="/typee30">Aarika sets</NavDropdown.Item>
              <NavDropdown.Item href="/typee31">Kurtis</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Girls Western wears" className="ps-5" id="basic-nav-dropdown">
              <NavDropdown.Item href="/typee32" width="200px">Girls midi</NavDropdown.Item>
              <NavDropdown.Item href="/typee33">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="/typee34">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="/typee35">Party wears</NavDropdown.Item>
            </NavDropdown>


              </Nav>
              
      
      
            </Container>
           </Navbar>
           

           



      
    
        <div className='container'>
          <div className='row mt-5'>
            <div className='backimg'><h1 class="text-white categories1 img-fluid">Categories</h1></div>
          </div>
        </div>






<div>
<div class="container-fluid category">
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 ms-2 gy-5'>
        {
          Images4.map((user2) =>(
            <div className='col'>
                    <img src={user2.img} alt="not found" className='img-fluid img-top' height="300px"  width="300px"/>
                    {/* <p className="text1 mt-3 fs-4">{user2.name}</p> */}
              </div>

          ))
        }
      </div>
  </div>
</div>
</div>


<Categoriescard/>




<Footer/>

</div>

)
}

export default Categories
