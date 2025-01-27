import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nava from '../Components/Nava'
import Footer from '../Components/Footer'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";

const Typee5 = () => {
  const[typee5,cart5] = useState([])
  var link4 = "http://127.0.0.1:8000/"
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/add1/5/")
    .then((response) => {
      cart5(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <div>
      <Nava/>
      <h1 className='mt-5'>Chiffon sarees</h1>
      <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee5.map((users4) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "350px",width:"100%"}}>
                  <Card.Img variant="top" src={link4+users4.Category_Image} style={{ width: "70%", height: "200px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users4.Category_Name1}</Card.Title>
                    <p className="money fs-6">upto ₹{users4.Category_Price}</p>
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

export default Typee5
