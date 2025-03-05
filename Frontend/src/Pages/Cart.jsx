import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const Cart = ({cart,setCart}) => {
    const [price,setPrice] = useState(0);
  return (
   <article>
        {
            cart.map((item) => {
                <div className='cart-box' key = {item.id}>
                    <div className="cart-img">
                        <img src={item.H_Image} alt="not found" />
                        <p>{item.H_Name}</p>
                    </div>
                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div>
                        <span>{item.H_Price}</span>
                        <button>Remove</button>
                    </div>
                </div>
            })
        }
        <div>
            <span>Total price of your cart</span>
            <span>Rs - {H_Price}</span>
        </div>
   </article>
  )
}

export default Cart
