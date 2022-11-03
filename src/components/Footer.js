import React from 'react'
import './Footer.css';
import FooterLink from './FooterLink';
import yunkiRedLogo from './public/icons/yunki-red.svg';


function Footer() {
  return (
    <div className='Footer__container'>
        <div className='footer-links'>
            <div className='know-us content'>
                <h1>get to know us</h1>
                <div className='knowus-contents link-holder'>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Yunki</p>
                    <p>Investor Relations</p>
                </div>
            </div>
            <div className='money content'>
                <h1>make money with us</h1>
                <div className='money-contents link-holder'>
                <p>Sell products on Yunki</p>
                <p>Become an Affiliate</p>
                <p>Advertise on Yunki</p>
                <p>Self-Publish with us</p>
                </div>
            </div>
            <div className='yunki-payments content'>
                <h1>yunki payments</h1>
                <div className='payments-contents link-holder'>
                    
                </div>
            </div>
            <div className='help-container content'>
                <h1>let us help you</h1>
                <div className='help-contents link-holder'>
                    
                </div>
            </div>
        </div>
        <div className='copyright-contents'>
            <img alt='' src={yunkiRedLogo}></img>
            <div className='copyright-text'>
                <div className='copyright-links'>
                    <div className='main-links'>
                        <div>Conditions of Use</div>
                        <div>Privacy of Notice</div>
                        <div>Interest Based Ads</div>
                    </div>
                    <div className='main-copyright'>
                        <p>&copy;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer