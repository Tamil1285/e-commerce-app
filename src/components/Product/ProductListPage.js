import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import productsData from "./products.json"; // Adjust the path based on your folder structure
import "./Products.css"; // Import custom CSS

const Products = () => {
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite state for a product
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Mobile Products</h2>
      <div className="row">
        {productsData.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card position-relative">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <button
                className="favorite-btn"
                onClick={() => toggleFavorite(product.id)}
              >
                {favorites.includes(product.id) ? (
                  <FaHeart size={24} color="red" />
                ) : (
                  <FaRegHeart size={24} color="gray" />
                )}
              </button>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function ProductsList() {
  return (
    <div className="App">
      {/* Uncomment these if needed */}
      {/* <Navbar /> */}
      <Products />
      {/* <Footer /> */}
    </div>
  );
}

export default ProductsList;
