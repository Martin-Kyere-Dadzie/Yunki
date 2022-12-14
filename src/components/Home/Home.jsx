import './Home.css'
import angleRight from '../public/icons/angle-right.svg';
import angleLeft from '../public/icons/angle-left.svg';
import { useState, useEffect } from 'react';
import { sliderData } from '../Slides/SliderData'
import FavProducts from '../Products/NewArrivals/FavProducts';
import Filter from './Filter/Filter';
import swimCostume from '../public/images/626bb5a3c561673851fd842f_5 39302.png';
import watch from '../public/images/626e635ba885cb03e3f03d5e_3-1.png';
import sweatTop from '../public/images/626bc12adcace1adec523e95_4.png';
import brownBag from '../public/images/6265151552d56e4117c09280_2.png';
import { Link } from 'react-router-dom';
import deliveryIcon from '../public/icons/delivery-icon.svg'
import List from './List/List';

function Home() {

    // banner carousel section
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const autoSlide = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []); 

    useEffect(() => {
        if (autoScroll) {
            autoSlide()
        }
        return () => clearInterval(slideInterval) 
    }, [autoScroll, autoSlide, currentSlide, slideInterval])
    // banner carousel section ends

return (
    <div className='Home__screen'>
        <div className='Home__section'>
            <div className='text__container'>
                <h1 className='tittle__text'>
                    buy your products and get it delivered to you <span>today.</span>
                </h1>
                <h3 className='tittle__text'>
                    All tracked, controlled, and defined.
                </h3>
                <div className="btn-container">
                    <button className='home__btn'>
                        <Link to='/MenShop' className='shop-link'>
                            <h6>Shop Men</h6>
                        </Link>
                    </button>
                    <button className='home__btn'>
                        <Link to='/MenShop' className='shop-link'>
                            <h6>Shop Women</h6>
                        </Link>
                    </button>
                    <button className='home__btn'>
                        <Link to='/MenShop' className='shop-link'>
                            <h6>Shop kids</h6>
                        </Link>
                    </button>
                </div>
            </div>
            <div className='banner__container'>
                <div className='banner__image'>
                    {sliderData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                            {index === currentSlide && (
                                <>
                                    <img alt='' src={slide.Image}></img>
                                    <div className="banner-overlay">
                                    <div className='content'>
                                        <h2 className='slide-text'>{slide.heading}</h2>
                                    </div>

                                    </div>
                                </>
                            )}
                        </div>
                        )
                    })}
                </div>
                <div className='angle__icon left__angle' onClick={prevSlide} >
                    <img alt='' src={angleLeft}></img>
                </div>
                <div className='angle__icon right__angle' onClick={nextSlide}>
                    <img alt='' src={angleRight} ></img>
                </div>
            </div>
            <div className="nav__icon delivery-container">
                <Link to='/wishlist' className='delivery__link'>
                    <img alt='' src={deliveryIcon} className='delivery-icon'></img>
                    <strong className='counter'>0</strong>
                </Link>
            </div>
        </div>
        <div className='top__favorite'>
            <h1>top favorites</h1>
            <div className='favLinks__btn'>
                <div className='fav__links'>
                    <h3>phones & accessories</h3>
                    <h3>Fashion & Beauty</h3>
                    <h3>electronics</h3>
                    <h3>home decors</h3>
                </div>
                <div className='fav__btns'>
                    <div className='fav__btn fav__prev' >
                        {/* <img alt='' src={leftAngleBlackIcon}></img> */}
                    </div>
                    <div className='fav__btn fav__prev' >
                        {/* <img alt='' src={rightAngleBlackIcon}></img> */}
                    </div>
                </div>
            </div>
        </div>
        
        <div className='content-display'>
            <div className="h-col">
                <Filter />
            </div>
            <div className="product-display h-col">
                <FavProducts id='1' name='Back Pack' image={brownBag} price = {122} title='Brown leather back pack' />
                <FavProducts id='2' name='Ladies Swim Suit' image={swimCostume} price={80} title='Swimming costume for ladies'/>
                <FavProducts id='3' name='Wrist Watch' image={watch} price={250} title="Gentlemen's wrist watch for occasional wears"/>
            </div>            
        </div>
    </div>
)
}

export default Home;
