import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Nava from '../Components/Nava'
import Footer from '../Components/Footer'
import { SlHeart } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Typee31 = () => {
  const[typee31,cart31] = useState([])
    var link30 = "http://127.0.0.1:8000/"
    useEffect(() => {
    axios.get("http://127.0.0.1:8000/add6/5/")
    .then((response) => {
        cart31(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    },[])
  })
  return (
    <div>
        <Nava/>
      <h1>Kurtis</h1>
      <div className="container">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee31.map((users30) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "350px",width:"100%"}}>
                  <Card.Img variant="top" src={link30+users30.Category_Image} style={{ width: "70%", height: "200px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users30.Category_Name2}</Card.Title>
                    <p className="money fs-6">upto ₹{users30.Category_Price}</p>
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

export default Typee31
