import React from 'react'
import './FavProducts.css'
import bagWhite from './public/icons/bag-white.svg'
import heartRed from './public/icons/heart-red.svg'
import heartRedFill from './public/icons/heart-red-fill.svg'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './redux'
import { bagActions } from './redux/BagSlice';
// import store from './redux/index';

function FavProducts({image, name, title, colors, price, id, }) {

    const dispatch = useDispatch();
    const addToBag = () => {
        dispatch(bagActions.addToBag({
            image,
            name,
            title,
            colors,
            price,
            id,
        }))
    }

return (
    <div className='favProduct__container'>
        <div className='favproduct__imageIcon'>
            <img alt='' src={image} className="product"></img>
            <div className='heartIcon__container'>
                <img alt='' src={heartRed}></img>
            </div>
        </div>
        <div className='favProduct__textContainer'>
            <h3 className='product__name'>{name}</h3>
            <p className='product__description'>{title}</p>
            <h5 className='product__color'>colors: {colors}</h5>
            <h3 className='product__price'>{price} GHS</h3>
        </div>
        <button className='addToBag__section' onClick={addToBag}>
            <h4>Add To Bag</h4>
            <img alt='' src={bagWhite} className="bag__icon"></img>
        </button>
    </div>
)
}

export default FavProducts