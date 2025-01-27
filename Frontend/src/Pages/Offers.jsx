import React from 'react'
import Button from 'react-bootstrap/Button';
import Nava from '../Components/Nava'
import Footer from '../Components/Footer'

const Offers = () => {

  const imageurl4 = './src/Pages/discountt.png'
  return (
    <div>
      <Nava/>
       <div className='container-fluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5'>
                    <h2 className='low ms-5'>Lowest prices</h2>
                    <h3 className='quality ms-5'>Best Quality shopping</h3>
                    <h6 className='get mt-5 ms-4'>Get a Quote for a Personalized Bundle and Save Up to 20%!</h6>
                    <Button className='shop1 mt-5 p-3' variant="danger">Shop now</Button>
                </div>

                <div className='col-md-6 mt-5'>
                  <img src={imageurl4} className='img-fluid' alt="not found" />
                </div>
            </div>
        </div>
       </div>




      <Footer/>
    </div>
  )
}

export default Offers
