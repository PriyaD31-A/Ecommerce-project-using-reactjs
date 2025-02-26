import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Nava from '../Components/Nava'
import Footer from '../Components/Footer'
import { SlHeart } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Typee30 = () => {
  const[typee30,cart30] = useState([])
    var link29 = "http://127.0.0.1:8000/"
    useEffect(() => {
    axios.get("http://127.0.0.1:8000/add6/4/")
    .then((response) => {
        cart30(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    },[])
  })
  return (
    <div>
        <Nava/>
      <h1>Aarika sets</h1>
      <div className="container">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee30.map((users29) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "300px",width:"100%"}}>
                  <Card.Img variant="top" src={link29+users29.Category_Image} style={{ width: "70%", height: "160px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users29.Category_Name2}</Card.Title>
                    <p className="money fs-6">upto ₹{users29.Category_Price}</p>
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

export default Typee30
