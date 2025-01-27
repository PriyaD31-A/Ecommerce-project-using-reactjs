import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Nava from '../Components/Nava'
import Footer from '../Components/Footer'
import { SlHeart } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Typee26 = () => {
  const[typee26,cart26] = useState([])
  var link25 = "http://127.0.0.1:8000/"
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/add5/5/")
    .then((response) => {
        cart26(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    },[])
  })
  return (
    <div>
      <Nava/>
      <h1 className='mt-5'>Traditional wears</h1>
      <div className="container">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 mt-5 justify-content-around ms-2">
            {typee26.map((users25) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "350px",width:"100%"}}>
                  <Card.Img variant="top" src={link25+users25.Category_Image} style={{ width: "70%", height: "200px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users25.Category_Name2}</Card.Title>
                    <p className="money fs-6">upto ₹{users25.Category_Price}</p>
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

export default Typee26
