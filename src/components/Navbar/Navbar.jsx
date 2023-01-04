/* eslint-disable no-undef */
import React from 'react';
import './Navbar.css';
// import yunkiBlackLogo from '../components/public/icons/yunki-black.svg';
import yunkiRedLogo from '../public/icons/yunki-red.svg';
import yunkiWhiteLogo from '../public/icons/yunki-white.svg';
import userwhite from '../public/icons/user-white.svg';
import heartWhite from '../public/icons/heart-white.svg';
import shoppingBagWhite from '../public/icons/shopping-bag.svg';
import deliveryIcon from '../public/icons/delivery-icon.svg';
import searchIcon from '../public/icons/search-icon.svg';
import menuIcon from '../public/icons/menu-icon.svg'
import { NavLink } from 'react-router-dom';
import navLinks from './NavLinks';
import closeBtn from '../public/icons/close-btn.svg';
// import Home from './Home';
// import FavProducts from './FavProducts';

import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { style } from '@mui/system';
// import index from './redux/index';

function Navbar() {

  const counter = useSelector(state => state.bag.totalQuantity);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(!isOpen);

  
  // search products
  // const search = ({value, changeInput})

  
  return (
      <div className='navbar__section'>
        
        {isOpen ? <img className='close-btn' src={closeBtn} onClick={closeMenu}></img> : <img className='isopen-menu' src={menuIcon} onClick={openMenu}></img> }

          <div className='navIcons__container'>
            <div className="leftIcon-holder side-icons">
              <div className='nav__icon'>
                <NavLink to='wishlist' className='visit__link' onClick={closeMenu}>    
                  <img alt='' src={heartWhite} className="heart__icon"></img>
                  <h4>wish list</h4>
                  <strong className='counter'>0</strong>
                </NavLink>
              </div>
              <div className="line"></div>
              <div className='nav__icon'>
                <NavLink to='checkout' className='visit__link' onClick={closeMenu}>
                  <img alt='' src={shoppingBagWhite} className="bag__icon"></img>
                  <h4>bag</h4>
                  <strong className='counter'>{ counter }</strong>
                </NavLink>
              </div>
            </div>
            <div className='yunkiLogo-container'>
              <NavLink to="/" className='logo-link ' onClick={closeMenu}>
                <img src={yunkiWhiteLogo} alt='Yunki-Logo'></img>
              </NavLink>
            </div>
            <div className="rightIcon-holder side-icons">           
              <div className='nav__icon'>
                <NavLink to='signin' className='visit__link' onClick={closeMenu}>
                  <img alt='' src={userwhite} className="user__icon"></img>
                  <span className='login'><h4>Martin</h4></span>
                </NavLink>
              </div>
              <div className="line line-invisible"></div>
              <div className='nav__icon' id='search-icon'> 
                <NavLink to='wishlist' className='visit__link' onClick={closeMenu}>    
                  <img alt='' src={searchIcon} className="search-icon"></img>
                  <h4 className='search-text'>search</h4>
                  {/* <strong className='counter'>0</strong> */}
                </NavLink>
              </div>
            </div>
        </div>
          {/* <div className='menu-display'>
            <img alt='' src={menuIcon} className='menu__icon'></img>
          </div> */}

        <div className="link-section">
          <div className="link-container">
            <ul>
              {
                navLinks.map(link => {
                  return <li key={link.name}><a href={link.route}>{link.name}</a></li>
                })
              }
            </ul>
          </div>
        </div>
        {isOpen ? (
        <div className="mobile-menu-dropdown" isOpen={isOpen} setIsOpen={setIsOpen}>   
          <div className="search-section">         
            <form className='search-container'>
              <input placeholder='' type='search'></input>
              <button className='search-btn' type='confirm'><img alt='' src={searchIcon}></img></button>
            </form>    
          </div>
          <ul>
            {
              navLinks.map(link => {
                return <li key={link.name}>
                  <a href={link.route}>{link.name}</a>
                </li>
              })
            }
          </ul>
          <div className="overlay" onClick={closeMenu}></div>
        </div>
        ) : null}
        
      </div>
  )
}

export default Navbar
