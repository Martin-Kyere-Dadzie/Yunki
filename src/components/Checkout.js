import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import FavProducts from './FavProducts'
import swimCostume from '../components/public/images/626bb5a3c561673851fd842f_5 39302.png';
import CheckoutHolder from './ShopnBagPrdctHolder';
import { useSelector } from 'react-redux';


function Checkout() {
  const bagItems = useSelector(state => state.bag.itemsList);
  
  return (
    <div className='checkout__container'>
      <div className='checkout__left'>
          <h1>Your Shopping Bag</h1>
        <div className='checkout__text'>
          <hr></hr>
          <ul>
              {bagItems.map(item => (               
                <li key={item.id}>
                  <CheckoutHolder
                  image={item.image} 
                  name={item.name} 
                  title={item.title} 
                  colors={item.color} 
                  price={item.price}
                  quantity={item.quantity} />
                </li>
              ))}
          </ul>
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