import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearchSharp } from "react-icons/io5";
import { SlHeart } from "react-icons/sl";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import './Nav.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';


function Nava({cartCount}) {
  const [show, setShow] = useState(false);
  const [show1,setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
  <div>
    <Navbar expand="lg" className="nav1">
      <Container>
        <Navbar.Brand  id="head">ShinyCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navv">
          <Nav className="mx-auto">
            <Nav.Link ><Link to = "/" id="nav2">Home</Link></Nav.Link>
            <Nav.Link ><Link to = "/Categories" id="nav2">Categories</Link></Nav.Link>
            
            <Nav.Link ><Link to = "/Offers" id="nav2">Offers</Link></Nav.Link>
            
            <Nav.Link id="nav2" href="#latest">Latest</Nav.Link>
            <Nav.Link id="nav2" href="#contact">Contact</Nav.Link>

          </Nav>
          <div className = 'contain'>
         
          <div className='nav3 nav4'><Nav.Link  href="#"><IoSearchSharp /></Nav.Link></div>
              <div className='nav3'><Nav.Link  href="#"><SlHeart /></Nav.Link></div>
              <div className='nav3'><Nav.Link  href="#"> <FaCartArrowDown />
              {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
              </Nav.Link></div>
              <div className='nav3'><Nav.Link  href="#" onClick={handleShow}><CgProfile /></Nav.Link></div>
          </div>
          
       
          
        </Navbar.Collapse>


      </Container>


      
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to = "/Login" className='logde'>Login</Link>
          
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>

    {/* <Offcanvas show={show1} onHide={handleClose1} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                
        </Offcanvas.Body>
      </Offcanvas>
     */}


    </div>
  );
}

export default Nava;


// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { IoSearchSharp } from "react-icons/io5";
// import { SlHeart } from "react-icons/sl";
// import { FaCartArrowDown } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { Link } from 'react-router-dom';
// import './Nav.css';

// function Nava({ cartCount }) {
//   return (
//     <Navbar expand="lg" className="nav1">
//       <Container>
//         <Navbar.Brand id="head">ShinyCart</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="navv">
//           <Nav className="mx-auto">
//             <Nav.Link><Link to="/" id="nav2">Home</Link></Nav.Link>
//             <Nav.Link><Link to="/Categories" id="nav2">Categories</Link></Nav.Link>
//             <Nav.Link><Link to="/Offers" id="nav2">Offers</Link></Nav.Link>
//             <Nav.Link id="nav2" href="#latest">Latest</Nav.Link>
//             <Nav.Link id="nav2" href="#contact">Contact</Nav.Link>
//           </Nav>

//           <div className='contain'>
//             <div className='nav3 nav4'><Nav.Link href="#"><IoSearchSharp /></Nav.Link></div>
//             <div className='nav3'><Nav.Link href="#"><SlHeart /></Nav.Link></div>

//             {/* Cart Icon with Dynamic Count */}
//             <div className='nav3 position-relative'>
//               <Nav.Link href="#">
//                 <FaCartArrowDown />
//                 {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
//               </Nav.Link>
//             </div>

//             <div className='nav3'><Nav.Link href="#"><CgProfile /></Nav.Link></div>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Nava;
