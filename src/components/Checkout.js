import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import FavProducts from './FavProducts'
import swimCostume from '../components/public/images/626bb5a3c561673851fd842f_5 39302.png';
import CheckoutHolder from './ShopnBagPrdctHolder';


function Checkout() {
  return (
    <div className='checkout__container'>
      <div className='checkout__left'>
        <div className='checkout__text'>
          <h1>Your Shopping Bag</h1>
          <hr></hr>
          <CheckoutHolder />
          {/* <FavProducts image={swimCostume} name="swimming costume" title="women swimming costume" colors="3" price="120" /> */}
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