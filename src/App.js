// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
// import App from './App';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import WishList from './components/WishList';
import SignIn from './components/Login/SignIn'
import LogIn from './components/Login/LogIn';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth, provider } from './firebase'
// import * as firebase from 'firebase/app'
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';


function App() {
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
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
