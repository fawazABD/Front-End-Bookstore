import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Login from './Login';
import Register from './Register';
import Home from './Home';
import About from './About2'
import Shop from './Shop';
import Contact from './Contact';
import Orders from './Orders';
import Checkout from './Checkout';
import Cart from './Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
