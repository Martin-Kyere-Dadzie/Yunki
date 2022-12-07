import React from 'react'
import './Footer.css';
import FooterLink from './FooterLink';
import yunkiRedLogo from '../public/icons/yunki-white.svg';
import locationIcon from '../public/icons/location-icon.svg';
import phoneIcon from '../public/icons/telephone-icon.svg';
import emailIcon from '../public/icons/email-icon.svg';
import facebookIcon from '../public/icons/facebook-icon.svg';
import instagramIcon from '../public/icons/instagram-icon.svg'
import twitterIcon from '../public/icons/twitter-icon.svg';

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className='Footer__container'>
        <div className='footer-logo'>
            <img alt='' src={yunkiRedLogo}></img>
        </div>
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
                <h1>Contact us</h1>
                <div className='help-contents link-holder'>
                    <div className='footer-icons-container'>
                        <div className='location-section main-icon'>
                            <div className='location-icon'>
                                <img alt='' src={locationIcon}></img>
                                <h5>Address:</h5>
                            </div>
                            <p>Tema comm19, lions loop L19, Accra-Ghana.</p>
                        </div>
                        <div className='hr'></div>
                        <div className='phone-section main-icon'>
                            <img alt='' src={phoneIcon}></img>
                            <h5>Phone:</h5>
                            <p>+233599607814</p>
                        </div>
                        <div className='email-section main-icon'>
                            <img alt='' src={emailIcon}></img>
                            <h5>Email:</h5>
                            <p>info@yunki.com</p>
                        </div>
                        <div className='follow-section main-icon'>
                            <h5>Follow us:</h5>
                            <div className='follow-icons'>
                                <div className='follow-icon-container'>
                                    <div className='tooltip'><p>instagram</p></div>
                                    <img alt='' src= {instagramIcon}></img>
                                </div>
                                <div className='follow-icon-container'>
                                    <div className='tooltip'><p>twitter</p></div>
                                    <img alt='' src={twitterIcon}></img>
                                </div>
                                <div className='follow-icon-container'>
                                    <div className='tooltip'><p>facebook</p></div>
                                    <img alt='' src={facebookIcon}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright-contents'>
            <div className='copyright-text'>
                <p>&copy; {year} Yunki. All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer