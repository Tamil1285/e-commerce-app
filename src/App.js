
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import ProductsList from './components/Product/ProductListPage';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailsPage from './components/Product/details';
import ProductCarousel from './components/Product/ProductCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './components/Cart/Cart';
import BuyNow from './components/Buy/BuyNow';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ItemDetailsPage />} />
        {/* <Route path="/products/:id" element={<ProductCarousel />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<BuyNow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
