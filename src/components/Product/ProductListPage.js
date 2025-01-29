  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom"; // Import useNavigate
  import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import icons for hearts and stars
  import productsData from "./products.json"; // Adjust the path based on your folder structure
  import "./Products.css"; // Import custom CSS
  import ProductSlider from "./ProductCarousel";

  const Products = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate(); // Initialize navigate function


    // Toggle favorite state for a product
    const toggleFavorite = (productId) => {
      setFavorites((prevFavorites) =>
        prevFavorites.includes(productId)
          ? prevFavorites.filter((id) => id !== productId)
          : [...prevFavorites, productId]
      );
    };

    // Function to render star ratings
    const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(<FaStar key={i} color="gold" size={18} />);
        } else if (i - rating < 1) {
          stars.push(<FaStarHalfAlt key={i} color="gold" size={18} />);
        } else {
          stars.push(<FaRegStar key={i} color="gold" size={18} />);
        }
      }
      return stars;
    };

    return (
      <div className="container my-5">
        <h2 className="mb-4">Mobile Products</h2>
        <div className="row">
          {productsData.map((product) => (
            <div className="col-xs-6  col-sm-4 col-md-3 mb-3" 
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)} // Navigate to details page
 >
              <div className="card position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <button
                      className="favorite-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
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
                  {/* Render star rating */}
                  <div className="card-rating">
                    {renderStars(product.rating)}
                  </div>
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
        <Products />
      </div>
    );
  }

  export default ProductsList;
