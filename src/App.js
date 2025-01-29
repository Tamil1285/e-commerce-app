
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import ProductsList from './components/Product/ProductListPage';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './components/Cart/Cart';
import BuyNow from './components/Buy/BuyNow';
import Wishlist from './components/WishList/Wishlist';
import ItemDetailsPage from './components/Product/ItemDetailsPage';
import { useState, createContext } from 'react';

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ItemDetailsPage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<BuyNow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;