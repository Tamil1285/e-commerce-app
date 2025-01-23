// Import required libraries
import React, { useState } from "react";
import itemData from "./itemData.json"; // Import the JSON file
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import Slider from "react-slick";
import products from "./products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";


const ItemDetails= () => {
  const [item] = useState(itemData);
  const [selectedImage, setSelectedImage] = useState(itemData.images[0]);

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        {/* Image and Image Selector */}
        <div className="col-md-6">
          <img
            src={selectedImage}
            alt="Product"
            className="img-fluid border mb-3"
            style={{ height: "300px" }}
          />
          <div className="d-flex">
            {itemData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="img-thumbnail me-2"
                style={{ width: "75px", cursor: "pointer" }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="col-md-6">
          <h2>{itemData.name}</h2>
          <h4 className="text-success">${itemData.price.toFixed(2)}</h4>
          <p>{itemData.description}</p>
          <button className="btn btn-primary btn-lg mb-3">Add to Cart</button>
          <button className="btn btn-outline-secondary btn-lg ms-2 mb-3">Buy Now</button>
          {/* Reviews Section */}
          <div className="mt-4">
            <h5>Customer Reviews</h5>
            {itemData.reviews.map((review, index) => (
              <div key={index} className="border-bottom pb-2 mb-2">
                <strong>{review.user}</strong>{" "}
                <span className="text-warning">
                  {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
                </span>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="mt-5">
        <h3>Product Specifications</h3>
        {Object.entries(item.specifications).map(([category, specs]) => (
          <div key={category} className="mb-4">
            <h5>{category.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</h5>
            <ul className="list-group">
              {Object.entries(specs).map(([key, value]) => (
                <li className="list-group-item" key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

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
    <div className="container mt-4 mb-3">
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

function ItemDetailsPage() {
  return (
    <div className="App">
        <ItemDetails />
        <ProductSlider />
    </div>
  );
}

export default ItemDetailsPage;
