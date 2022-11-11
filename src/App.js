// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import App from './App';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import WishList from './components/WishList';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth, provider } from './firebase'
// import * as firebase from 'firebase/app'

function App() {
  // const bagItemList = useSelector((state) => state.bag.itemsList);
  // console.log(bagItemList);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
