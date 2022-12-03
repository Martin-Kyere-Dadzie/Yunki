import React from 'react'
import './ShortcutLinks.css'
import mensFashion from '../public/images/beautiful-men-fashion-wooden-background.jpg';
import sneaker from '../public/images/sneaker.webp'
import electronics from '../public/images/NicePng_electronics-png_866175.png';
import bracelets from '../public/images/37433_SILVV5.webp'
import ladiesFasion from '../public/images/slim-lady-fashionable-trousers-blouse-red-hat-is-sitting-chair-stand-with-shiny-dresses.jpg';

function ShortcutLinks() {
  return (
    <div className='shortcutlinks__section'>
      <div className='first__row row'>
        <div className='first__holder image__one'>
          <div className='overlay'>
            <h5>Braceletsy</h5>
          </div>
          <img alt='' src={bracelets}></img>
        </div>
        <div className='first__holder image__two'>
          <div className='overlay'>
            <h5>Foot Wares</h5>
          </div>
          <img alt='' src={sneaker}></img>
        </div>
        <div className='first__holder image__three'>
          <div className='overlay'>
            {/* <button className='overlay__btn'>shop</button> */}
            <h5>Men's Fashion</h5>
          </div>
          <img alt='' src={mensFashion}></img>
        </div>
      </div>
      <div className='second__row row'>
        <div className='second__holder image__one'>
          <div className='overlay'>
            <h5>women's Fashion</h5>
          </div>
          <img alt='' src={ladiesFasion}></img>
        </div>
        <div className='second__holder image__two'>
          <img alt=''></img>
        </div>
        <div className='second__holder image__three'>
          <img alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default ShortcutLinks;