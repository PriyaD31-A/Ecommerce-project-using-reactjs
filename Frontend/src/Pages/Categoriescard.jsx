import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";


const Categoriescard = () => {
    const [userr2, carddetails2] = useState([]);
    useEffect(() => {
    axios.get("http://127.0.0.1:8000/apivalues/categories/")
      .then((response) => {
        console.log(response.data);
        carddetails2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <h1 class="conn">Shop by category</h1>
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 mt-5 justify-content-around ms-2">
          {userr2.map((users2) => (
            <div className="col p-3">
              <Card
                className="align-items-center apply"
                style={{ height: "280px" }}
              >
                <Card.Img
                  variant="top"
                  src={users2.C_Image}
                  style={{ width: "90%", height: "150px", padding: "10px" }}
                />
                <Card.Body>
                  <Card.Title className="cardtitle1">{users2.C_Name}</Card.Title>
                  <p className="money fs-6">upto ₹{users2.C_Price}</p>
                  <Button variant="primary cart p-0 mt-2">Add to cart</Button>
                  <div className="wishlist">
                    <SlHeart />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Categoriescard
