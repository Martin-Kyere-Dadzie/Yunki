// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import App from './App';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import WishList from './components/WishList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
