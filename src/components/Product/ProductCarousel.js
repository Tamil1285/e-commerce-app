import React from "react";
import Slider from "react-slick";
import products from "./products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";


const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h2>Similar Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-price">{product.price}</p>
                {/* <span className="current-price">{product.price}</span>{" "}
                <span className="original-price">{product.originalPrice}</span>{" "}
                <span className="discount">{product.discount}</span>
              </p>
              <p className="product-rating">
                <span className="rating">{product.rating} ★</span> ({product.reviews})
              </p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
