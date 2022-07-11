import React from 'react'
import './FavProducts.css'
import bagWhite from './public/icons/bag-white.svg'
import heartBlack from './public/icons/heart.svg'
import blackBackPack from '../components/public/images/628ce44ea2de3236de2694f4_Google.jpg';
import swimCostume from '../components/public/images/626bb5a3c561673851fd842f_5 39302.png';
import watch from '../components/public/images/626e635ba885cb03e3f03d5e_3-1.png';
import sweatTop from '../components/public/images/626bc12adcace1adec523e95_4.png';
import brownBag from '../components/public/images/6265151552d56e4117c09280_2.png';


function FavProducts({image, name, title, colors, price }) {
  return (
    <div className='favProduct__container'>
        <div className='favproduct__imageIcon'>
            <img alt='' src={image} className="product"></img>
            <div className='heartIcon__container'>
                <img alt='' src={heartBlack}></img>
            </div>
        </div>
        <div className='favProduct__textContainer'>
            <h3 className='product__name'>{name}</h3>
            <p className='product__discribtion'>{title}</p>
            <h5 className='product__color'>colors: {colors}</h5>
            <h3 className='product__price'>{price} GHS</h3>
        </div>
        <button className='addToBag__section'>
            <h4>Add To Bag</h4>
            <img alt='' src={bagWhite} className="bag__icon"></img>
        </button>
    </div>
  )
}

export default FavProducts