import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nava from '../Components/Nava'
import Footer from '../Components/Footer'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";

const Typee2 = () => {
  const[typee2,cart2] = useState([])
  var link1 = "http://127.0.0.1:8000/"
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/add1/2/")
    .then((response) => {
      cart2(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  return (
    <div>
        <Nava/>
        <h1 className='mt-5'>Silk Sarees</h1>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee2.map((users1) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "280px",width:"100%"}}>
                  <Card.Img variant="top" src={link1+users1.Category_Image} style={{ width: "70%", height: "150px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1" style={{fontSize: "5px" }}>{users1.Category_Name1}</Card.Title>
                    <p className="money">upto ₹{users1.Category_Price}</p>
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

export default Typee2
