import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import products from "./products.json";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductSlider = () => {
  const [wishlist, setWishlist] = useState({});
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const toggleWishlist = (id, event) => {
    event.stopPropagation(); // Prevent click from navigating
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [id]: !prevWishlist[id],
    }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mt-4 mb-2 position-relative">
      <h4 className="mb-3">Similar Products</h4>

      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card shadow-sm border-0 p-2 mx-auto w-75 w-sm-100"
            style={{ maxWidth: "220px", cursor: "pointer" }}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Wishlist Icon */}
            <div
              className="position-absolute top-0 end-0 p-1"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={(e) => toggleWishlist(product.id, e)}
            >
              {wishlist[product.id] ? (
                <AiFillHeart className="text-danger" />
              ) : (
                <AiOutlineHeart className="text-muted" />
              )}
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top img-fluid"
              style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
            />

            {/* Product Info */}
            <div className="card-body p-2 text-center">
              <h6 className="card-title mb-1">{product.name}</h6>
              <p className="card-text text-success fw-bold mb-1">${product.price}</p>
              <p className="text-warning mb-1">{product.rating} ★</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
        onClick={() => sliderRef.current.slickPrev()}
      >
        ◀
      </button>

      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
        onClick={() => sliderRef.current.slickNext()}
      >
        ▶
      </button>
    </div>
  );
};

export default ProductSlider;
