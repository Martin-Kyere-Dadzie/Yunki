/* eslint-disable no-undef */
import React from 'react';
import '../components/Navbar.css';
// import yunkiBlackLogo from '../components/public/icons/yunki-black.svg';
import yunkiRedLogo from '../components/public/icons/yunki-red.svg';
import yunkiWhiteLogo from './public/icons/yunki-white.svg';
import userwhite from '../components/public/icons/user-white.svg';
import heartWhite from '../components/public/icons/heart-white.svg';
import shoppingBagWhite from '../components/public/icons/bag-white.svg';
import searchBlackIcon from '../components/public/icons/search-black.svg'
import { Link } from 'react-router-dom';
// import Home from './Home';
// import FavProducts from './FavProducts';

import { useSelector } from 'react-redux';
// import index from './redux/index';

function Navbar() {

  const counter = useSelector(state => state.bag.totalQuantity);

  return (
    <div className='navbar__section'>
      <div className='blackLogo__container'>
        <Link to="/">
          <img src={yunkiRedLogo} alt='Yunki-Logo'></img>
        </Link>
      </div>
      <div className='nav__links'>
        <div className='link one'>
          <h3 className='men__section'>men</h3>
        </div>
        <div className='link one'>
          <h3 className='women__section'>women</h3>
        </div>
        <div className='link one'>
          <h3 className='Kinds__section'>kids</h3>
        </div>
      </div>
      <div className='search__container'>
        <input type="search"></input>
        <button className='search__btn'>
          <img alt='' src={searchBlackIcon}></img>
        </button>
      </div>
      <div className='navChildren__container'>
        <div className='nav__icon'>
          <Link to='signin' className='visit__link'>
            <img alt='' src={userwhite} className="user__icon"></img>
          </Link>
        </div>
        <div className='nav__icon'>
          <Link to='wishlist' className='visit__link'>    
            <img alt='' src={heartWhite} className="heart__icon"></img>
            <strong></strong>
          </Link>
        </div>
        <div className='nav__icon'> 
          <Link to='checkout' className='visit__link'>
            <img alt='' src={shoppingBagWhite} className="bag__icon"></img>
            <strong>{ counter }</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
