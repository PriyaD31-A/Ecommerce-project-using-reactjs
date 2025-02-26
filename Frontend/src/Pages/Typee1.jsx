import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";
import Nava from '../Components/Nava';
import Footer from '../Components/Footer';

const Typee1 = () => {
  const[typee1,cart1] = useState([])
  var link = "http://127.0.0.1:8000/"
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/add1/1/")
    .then((response) => {
      cart1(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  return (
    <div>
      <Nava/>
        <h1 className='mt-5'>Sarees</h1>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee1.map((users) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "280px" }}>
                  <Card.Img variant="top" src={link+users.Category_Image} style={{ width: "80%", height: "150px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users.Category_Name1}</Card.Title>
                    <p className="money">upto ₹{users.Category_Price}</p>
                    <Button variant="primary cart p-0 mt-2" onClick={() => {addtocart(users)}}>Add to cart</Button>
                    <div className="wishlist"><SlHeart /> </div>
                   
                      
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Typee1
