import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";
import Nava from '../Components/Nava';
import Footer from '../Components/Footer';

const Typee21 = () => {
    const[typee21,cart21] = useState([])
  var link20 = "http://127.0.0.1:8000/"
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/add4/6/")
    .then((response) => {
        cart21(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    },[])
  })
  return (
    <div>
        <Nava/>
      <h1 className='mt-5'>Traditional kurta</h1>
      <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee21.map((users20) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "350px",width:"100%"}}>
                  <Card.Img variant="top" src={link20+users20.Category_Image} style={{ width: "70%", height: "200px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users20.Category_Name2}</Card.Title>
                    <p className="money fs-6">upto ₹{users20.Category_Price}</p>
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

export default Typee21
