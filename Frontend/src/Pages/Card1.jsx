import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlHeart } from "react-icons/sl";

const Card1 = () => {
  // const [cart, setCart] = useState([]);
  // function addtocart(users) {
  //   setCart([...cart, users]);
  //   console.log(cart);
    // toast.success("added to cart")
  // }
  const [cartt, carddetails] = useState([]);
  useEffect(() => {
    axios
      .get(" http://127.0.0.1:8000/apivalues/Home/")
      .then((response) => {
        console.log(response.data);
        carddetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [name1, setName1] = useState("");
  const [price1, setPrice1] = useState("");
  const [image1, setimage1] = useState("");

  const handleName1 = (event) => {
    setName1(event.target.value);
    console.log(name1);
  };

  const handlePrice1 = (event) => {
    setPrice1(event.target.value);
    console.log(price1);
  };

  const handleImage1 = (event) => {
    setimage1(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit1 = () => {
    let Home = {
      H_Name: name1,
      H_Price: price1,
      H_Image: image1,
    };

    axios
      .post(" http://127.0.0.1:8000/apivalues/Home/", Home, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <form action="/admin">
          <input type="text" onChange={handleName1}></input>
          <br></br>
          <input type="password" onChange={handlePrice1}></input>
          <br></br>
          <input type="file" onChange={handleImage1}></input>
          <br></br>
          <button type="button" onClick={handleSubmit1}>
            Submit
          </button>
          <br></br>
        </form>

        <h1 class="conn">Shop by category</h1>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 mt-5 justify-content-around ms-2">
            {cartt.map((users) => (
              <div className="col p-3">
                <Card className="align-items-center apply"  style={{ height: "320px" }}>
                  <Card.Img variant="top" src={users.H_Image} style={{ width: "90%", height: "180px", padding: "10px" }}/>
                  <Card.Body>
                  <Card.Title className="cardtitle1">{users.H_Name}</Card.Title>
                    <p className="money fs-6">upto ₹{users.H_Price}</p>
                    <Button variant="primary cart p-0 mt-2" onClick={() => {addtocart(users)}}>Add to cart</Button>
                    <div className="wishlist"><SlHeart /> </div>
                   
                      
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;




