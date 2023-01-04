// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
// import App from './App';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import WishList from './components/WishList/WishList';
import SignIn from './components/Auth/SignIn'
import LogIn from './components/Auth/LogIn';
import BeautyAndPersonalCare from './components/Products/BeautyAndPersonalCare';
import NewArrivals from './components/Products/NewArrivals/NewArrivals';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth, provider } from './firebase'
// import * as firebase from 'firebase/app'
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import HomeAndKitchens from './components/Products/FavProducts/HomeAndKitchens';
import OfficeAndSecurity from './components/Products/OfficeAndSecurity';
import PetSupplies from './components/Products/FavProducts/PetSupplies';
import MenShop from './components/Home/MenShop/MenShop';


function App() {
  // usestate hook for opening the mobile-menu-icon
  const [isOpen, setIsOpen] = useState(false);
  // const bagItemList = useSelector((state) => state.bag.itemsList);
  // console.log(bagItemList);
  const openMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false)
  return (
    <BrowserRouter>
        <div className="App" onClick={closeMenu}>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/BeautyAndPersonalCare' element={<BeautyAndPersonalCare />} />
            <Route path='/NewArrivals' element={<NewArrivals />} />
            <Route path='/HomeAndKitchens' element={<HomeAndKitchens />} />
            <Route path='/OfficerAndSecurity' element={<OfficeAndSecurity />} />
            <Route path='/PetSupplies' element={<PetSupplies />} />
            <Route path='/MenShop' element={<MenShop />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
