import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";

const Traditionalcard = ({search1}) => {
    const [userdetails, Traditional] = useState([]);

    const searchDress1 = userdetails.filter((user2) => 
         search1 === "" || (user2.T_Name  && user2.T_Name.toLowerCase().includes(search1.toLowerCase()))
   
    )

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/apivalues/Traditional/")
      .then((response) => {
        console.log(response.data);
        Traditional(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },[])
  return (
    <div>
    <h1 class="conn mt-5">Traditional Wears</h1>
      <div className='container mt-5'>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-around ms-2'>
            {
                searchDress1.map((user2) => (
                  <div className='col p-3'>
                    <Card className='align-items-center apply' style={{height:"280px"}}>
                  
                  <Card.Img variant="top" src={user2.T_Image}  style={{ width: '90%' ,height:'150px', padding: '5px' }} />
                  <Card.Body>
                    <Card.Title className='cardtitle1'>{user2.T_Name}</Card.Title>
                    <p className='money fs-6'>upto ₹{user2.T_Price}</p>
                    <Button variant="primary cart p-0 mt-2">Add to cart</Button>
                    <div className='wishlist'><SlHeart /></div>
                  </Card.Body>
                </Card>
               
                </div>
        )) 
            }
        </div>
    </div>
      
    </div>
  )
}

export default Traditionalcard
