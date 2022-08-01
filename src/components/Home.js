import '../components/Home.css'
import leftAnglewhiteIcon from '../components/public/icons/left-angle-white.svg';
import rightAnglewhiteIcon from '../components/public/icons/right-angle-white.svg';
import leftAngleBlackIcon from '../components/public/icons/left-angle-black.svg';
import rightAngleBlackIcon from '../components/public/icons/right-angle-black.svg';
import { useState, useEffect } from 'react';
import { sliderData } from '../components/SliderData'
import FavProducts from './FavProducts'
import swimCostume from '../components/public/images/626bb5a3c561673851fd842f_5 39302.png';
import watch from '../components/public/images/626e635ba885cb03e3f03d5e_3-1.png';
import sweatTop from '../components/public/images/626bc12adcace1adec523e95_4.png';
import brownBag from '../components/public/images/6265151552d56e4117c09280_2.png';
import cocopineCream from './public/images/cocpine curls cream and oil.png';
import petLeash from './public/images/pet leash.png';
import brownBelt from './public/images/brown-belt.png';
import dosHambres from './public/images/dos hembres.png';
import ShortcutLinks from './ShortcutLinks';

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
                    buy your products and get it delivered to you <span>today</span>.
                </h1>
                <h3 className='tittle__text'>
                    All tracked, controlled, and defined.
                </h3>
                <button className='home__btn'>Shop</button>
            </div>
            <div className='banner__container'>
                <div className='angle__icon left__angle' onClick={prevSlide} >
                    <img alt='' src={leftAnglewhiteIcon}></img>
                </div>
                <div className='banner__image'>
                    {sliderData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                            {index === currentSlide && (
                                <img alt='' src={slide.Image}></img>
                            )}
                        </div>
                        )
                    })}
                </div>
                <div className='angle__icon right__angle' onClick={nextSlide}>
                    <img alt='' src={rightAnglewhiteIcon} ></img>
                </div>
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
                        <img alt='' src={leftAngleBlackIcon}></img>
                    </div>
                    <div className='fav__btn fav__prev' >
                        <img alt='' src={rightAngleBlackIcon}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className='topFav__section'>
            <div className='topFav__container'>
                <FavProducts image={swimCostume} name="swimming costume" title="women swimming costume" colors={3} price={120} id={1} />
                <FavProducts image={watch} name="mens watch" title="mens's smart leather watch" colors={2} price={350} id={2} />
                <FavProducts image={sweatTop} name="sweat top" title="sweat top for both genders" colors={3} price={150} id={3}/>
                <FavProducts image={brownBag} name="back pack" title="leather back pack" colors={3} price={320} id={4} />
            </div>
            <div className='topFav__container'>
                <FavProducts image={cocopineCream} name="cocopine cream and oil" title="cocopine curls cream and oil for hair and skin care" colors={1} price={52} id={5} />
                <FavProducts image={brownBelt} name="men's belt" title="Gentlemen brown belt for casual wears" colors={2} price={80} id={6} />
                <FavProducts image={petLeash} name="pet leash" title="pet leash for pets" colors={1} price={85} id={7}/>
                <FavProducts image={dosHambres} name="dos hambres" title="dos hambres alcoholic beverage" colors={1} price={220} id={8} />
            </div>
        </div>
        <div className='ShortcutLinks__section'>
            <ShortcutLinks />
        </div>
    </div>
)
}

export default Home;
