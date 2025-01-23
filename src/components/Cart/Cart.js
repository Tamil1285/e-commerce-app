import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Table, Form } from "react-bootstrap";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mivi Play 5W Portable Bluetooth Speaker",
      image: "https://via.placeholder.com/100", // Replace with actual product image URL
      price: 1999,
      discount: 1300,
      deliveryCharge: 40,
      quantity: 1,
      warranty: { price: 29, discount: 50, isAdded: false },
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleWarranty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, warranty: { ...item.warranty, isAdded: !item.warranty.isAdded } }
          : item
      )
    );
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) =>
        total +
        (item.price - item.discount + (item.warranty.isAdded ? item.warranty.price : 0)) *
          item.quantity,
      0
    );

  return (
    <Container className="mt-4">
      <Row>
        {/* Left Column: Product Details */}
        <Col md={8}>
          {cartItems.map((item) => (
            <div key={item.id} className="border mb-4 p-3">
              <Row>
                <Col md={2}>
                  <img src={item.image} alt={item.name} className="img-fluid" />
                </Col>
                <Col md={10}>
                  <h6>{item.name}</h6>
                  <p className="text-muted mb-1">
                    Seller: MPDSLERetail <span className="badge bg-success">Assured</span>
                  </p>
                  <p className="text-muted">
                    Delivery by Mon Jan 27 | ₹{item.deliveryCharge} Free
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <p className="mb-0">
                      <strong>
                        ₹{item.price - item.discount}{" "}
                        <span className="text-muted text-decoration-line-through">
                          ₹{item.price}
                        </span>{" "}
                        ({Math.round((item.discount / item.price) * 100)}% Off)
                      </strong>
                    </p>
                  </div>
                  <Row className="mt-3">
                    <Col md={6}>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleRemove(item.id)}
                        className="float-end"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <p>
                    <strong>Extended Warranty for Portable Bluetooth Speaker (1 Year)</strong>{" "}
                    <Button
                      variant={item.warranty.isAdded ? "outline-danger" : "outline-primary"}
                      size="sm"
                      onClick={() => toggleWarranty(item.id)}
                      className="ms-2"
                    >
                      {item.warranty.isAdded ? "Remove" : "Add"}
                    </Button>
                  </p>
                  <p className="text-muted">
                    ₹{item.warranty.price}{" "}
                    <span className="text-decoration-line-through">
                      ₹{item.warranty.price * 2}
                    </span>{" "}
                    ({item.warranty.discount}% Off)
                  </p>
                </Col>
              </Row>
            </div>
          ))}
        </Col>

        {/* Right Column: Price Details */}
        <Col md={4}>
          <div className="border p-3">
            <h5>Price Details</h5>
            <hr />
            <Table borderless>
              <tbody>
                <tr>
                  <td>Price ({cartItems.length} item)</td>
                  <td className="text-end">₹{cartItems[0].price}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td className="text-end text-success">-₹{cartItems[0].discount}</td>
                </tr>
                <tr>
                  <td>Delivery Charges</td>
                  <td className="text-end text-success">₹{cartItems[0].deliveryCharge} Free</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td className="text-end">
                    {cartItems[0].warranty.isAdded ? `₹${cartItems[0].warranty.price}` : "₹0"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Amount</strong>
                  </td>
                  <td className="text-end">
                    <strong>₹{calculateTotal()}</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* <Button variant="warning" className="w-100">
              Place Order
            </Button> */}
            <Link to="/buy" className="nav-link d-flex align-items-center">
              <Button variant="warning" className="w-100 mt-2">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
