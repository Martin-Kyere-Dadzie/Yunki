import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout__container'>
      <div className='checkout__left'>
        <div className='checkout__text'>
          <h1>Your Shopping Bag</h1>
          <hr></hr>
        </div>
      </div>
      <div className='checkout__right'>
        <div className='checkout__subtotal'>
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout