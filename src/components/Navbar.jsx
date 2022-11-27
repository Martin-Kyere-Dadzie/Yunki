/* eslint-disable no-undef */
import React from 'react';
import '../components/Navbar.css';
// import yunkiBlackLogo from '../components/public/icons/yunki-black.svg';
import yunkiRedLogo from '../components/public/icons/yunki-red.svg';
import yunkiWhiteLogo from './public/icons/yunki-white.svg';
import userwhite from '../components/public/icons/user-white.svg';
import heartWhite from '../components/public/icons/heart-white.svg';
import shoppingBagWhite from '../components/public/icons/bag-white.svg';
import deliveryIcon from './public/icons/delivery-icon.svg';
import searchIcon from '../components/public/icons/search-icon.svg';
import menuIcon from './public/icons/menu-icon.svg'
import { Link } from 'react-router-dom';
// import Home from './Home';
// import FavProducts from './FavProducts';

import { useSelector } from 'react-redux';
// import index from './redux/index';

function Navbar() {

  const counter = useSelector(state => state.bag.totalQuantity);

  return (
    <div className='navbar__section'>
        <div className='navIcons__container'>
          <div className="leftIcon-holder side-icons">
            <div className='nav__icon'>
              <Link to='wishlist' className='visit__link'>    
                <img alt='' src={heartWhite} className="heart__icon"></img>
                <h4>wish list</h4>
                <strong className='counter'>0</strong>
              </Link>
            </div>
            <div className="line"></div>
            <div className='nav__icon'>
              <Link to='checkout' className='visit__link'>
                <img alt='' src={shoppingBagWhite} className="bag__icon"></img>
                <h4>bag</h4>
                <strong className='counter'>{ counter }</strong>
              </Link>
            </div>
          </div>
          <div className='yunkiLogo-container'>
            <Link to="/" className='logo-link '>
              <img src={yunkiWhiteLogo} alt='Yunki-Logo'></img>
            </Link>
          </div>
          <div className="rightIcon-holder side-icons">           
            <div className='nav__icon'>
              <Link to='signin' className='visit__link'>
                <img alt='' src={userwhite} className="user__icon"></img>
                <span className='login'><h4>Martin</h4></span>
              </Link>
            </div>
            <div className="line line-invisible"></div>
            <div className='nav__icon' id='search-icon'> 
              <Link to='wishlist' className='visit__link'>    
                <img alt='' src={searchIcon} className="search-icon"></img>
                <h4 className='search-text'>search</h4>
                {/* <strong className='counter'>0</strong> */}
              </Link>
            </div>
          </div>
      </div>
        <div className='menu-display'>
          <img alt='' src={menuIcon} className='menu__icon'></img>
        </div>

      <div className="link-section">
        <div className="link-container">
          <ul>
            <li>New Arrivals</li>
            <li>Women</li>
            <li>Food and Drinks</li>
            <li>Kids</li>
            <li>Men</li>
            <li>Babies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
