import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import itemData from "./itemData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductSlider from "./ProductCarousel";
import { CartContext } from "../../App";

const ItemDetails = ({ cartItems, setCartItems }) => {
  const { id } = useParams();
  
  const product = itemData.find((item) => item.id === parseInt(id)); 
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [isWishlist, setIsWishlist] = useState(false);

  if (!product) {
    return (
      <div className="container mt-5">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const addToCart = () => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = () => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-md-6 position-relative">
          <img
            src={selectedImage}
            alt="Product"
            className="img-fluid border mb-3"
            style={{ height: "300px" }}
          />
          <div
            className="position-absolute top-0 end-0 p-2"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={toggleWishlist}
          >
            {isWishlist ? <AiFillHeart className="text-danger" /> : <AiOutlineHeart className="text-muted" />}
          </div>
          <div className="d-flex">
            {product.images?.map((img, index) => (
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

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">${product.price.toFixed(2)}</h4>
          <p>{product.description}</p>
          {cartItems.find((item) => item.id === product.id) ? (
            <button className="btn btn-danger btn-lg mb-3" onClick={removeFromCart}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary btn-lg mb-3" onClick={addToCart}>
              Add to Cart
            </button>
          )}
          <button className="btn btn-outline-secondary btn-lg ms-2 mb-3">Buy Now</button>

          <div className="mt-4">
            <h5>Customer Reviews</h5>
            {product.reviews?.map((review, index) => (
              <div key={index} className="border-bottom pb-2 mb-2">
                <strong>{review.user}</strong>{" "}
                <span className="text-warning">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </span>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Product Specifications</h3>
        {Object.entries(product.specifications || {}).map(([category, specs]) => (
          <div key={category} className="mb-4">
            <h5>{category.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</h5>
            <ul className="list-group">
              {Object.entries(specs).map(([key, value]) => (
                <li className="list-group-item" key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

function ItemDetailsPage() {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="App">
      <ItemDetails cartItems={cartItems} setCartItems={setCartItems} />
      <ProductSlider />
    </div>
  );
}

export default ItemDetailsPage;
