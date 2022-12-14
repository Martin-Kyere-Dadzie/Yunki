import React from 'react'
import './FavProducts.css'
import bagWhite from '../../public/icons/shopping-bag.svg'
import heartWhite from '../../public/icons/wish-heart.svg';
// import heartRedFill from '../../public/icons/heart-red-fill.svg'
import { useDispatch } from 'react-redux';
// import { actions } from '../../Redux'
import { bagActions } from '../../Redux/BagSlice';
import cediIcon from '../../public/icons/cedi-icon.svg';
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
            <img alt='product-img' src={image} className="product"></img>
            <div className='heartIcon__container'>
                <img alt='icon-img' src={heartWhite} className='heart__icon'></img>
            </div>
        </div>
        <div className='favProduct__textContainer'>
            <h3 className='product__name'>{name}</h3>
            <p className='product__description'>{title}</p>
            <div className="color-selector">
                <h5 className='product__color'>colors: {colors}</h5>
                <div className="main-color"></div>
            </div>
            <h3 className='product__price'>
                <img alt='icon-img' src={cediIcon}></img>{price} GHS
            </h3>
        </div>
        <button className='addToBag__section' onClick={addToBag}>
            <h4>Add To Bag</h4>
            <img alt='icon-img' src={bagWhite} className="bag__icon"></img>
        </button>
    </div>
)
}

export default FavProducts