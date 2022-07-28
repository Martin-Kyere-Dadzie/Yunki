import React from 'react'
import './ShopnBagPrdctHolder.css'
// import heartBlack from './public/icons/heart.svg'
import trashCan from './public/icons/trash.svg';
import angleDown from './public/icons/angle-down.svg'
import angleUp from './public/icons/angle-up.svg'
import { useDispatch } from 'react-redux';
import {bagActions} from './redux/BagSlice';

function CheckoutHolder({image, name, title, colors, price, quantity, id }) {

    const dispatch = useDispatch()
    const incrementBagItem = () => {
        dispatch(bagActions.addToBag({
            name,
            id,
            price,
            image,
            title
        }))
    }

    const decrementBagItem = () => {
        dispatch(bagActions.removeFromBag(id))
    }

return (
    
    <div className='checkoutHolder__container'>
        <div className='checkoutHolder__imageIcon'>
            <img alt='' src={image} className="product"></img>
            <div className='itemIncrement__container'>
                <div className='incrementIcon angle__up'>
                    <img alt='' src={angleUp} onClick={incrementBagItem}></img>
                </div>
                <span className='increment__count'>{quantity}</span>
                <div className='incrementIcon angle__down'>
                    <img alt='' src={angleDown} onClick={decrementBagItem}></img>
                </div>
            </div>
        </div>
        <div className='checkoutHolder__textContainer'>
            <h3 className='checkoutProduct__name'>{name}</h3>
            <p className='checkoutProduct__description'>{title}</p>
            <h5 className='checkoutProduct__color'>colors: {colors}</h5>
            <h3 className='checkoutProduct__price'>{price} GHS</h3>
        </div>
        <button className='trashCan__section' onClick={decrementBagItem}>
            <h4>Delete</h4>
            <img alt='' src={trashCan} className="bag__icon"></img>
        </button>
    </div>
)
}

export default CheckoutHolder;