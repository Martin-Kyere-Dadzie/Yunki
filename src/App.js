// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import App from './App';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import WishList from './components/WishList';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {
  const bagItemList = useSelector((state) => state.bag.itemsList);
  console.log(bagItemList);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
