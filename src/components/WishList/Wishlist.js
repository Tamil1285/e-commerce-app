import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "density Men Sandals",
      price: "₹642",
      originalPrice: "₹999",
      discount: "35% off",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      assured: true,
    },
    {
      id: 2,
      name: "Mivi Fort S38 With Subwoofer",
      price: "₹2,199",
      originalPrice: "₹10,999",
      discount: "80% off",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      assured: false,
    },
    {
      id: 3,
      name: "JBL Go Essential with Rich Bass",
      price: "₹1,699",
      originalPrice: "₹2,999",
      discount: "43% off",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      assured: true,
    },
  ]);

  const handleRemoveItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Wishlist ({wishlist.length})</h1>
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="card mb-3"
          style={{ maxWidth: "100%" }}
        >
          <div className="row g-0">
            <div className="col-md-2">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt={item.name}
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {item.assured && (
                  <p className="text-primary mb-1">
                    <i className="bi bi-patch-check-fill"></i> Assured
                  </p>
                )}
                <p className="card-text mb-1">
                  <strong>{item.price}</strong>{" "}
                  <span className="text-decoration-line-through text-muted">
                    {item.originalPrice}
                  </span>{" "}
                  <span className="text-success">{item.discount}</span>
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i className="bi bi-trash"></i> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {wishlist.length === 0 && (
        <p className="text-center text-muted">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
