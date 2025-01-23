import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Accordion, Modal } from "react-bootstrap";

const PaymentPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    name: "Tamilarasan",
    phone: "7502101285",
    email: "example@example.com",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Tamilarasan",
      type: "WORK",
      phone: "7502101285",
      address: "Uthukuli, Uthukuli bus stop, Tiruppur District, Tamil Nadu",
      pincode: "638751",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [showModal, setShowModal] = useState(false);

  const [newAddress, setNewAddress] = useState({
    name: "",
    type: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleLoginChange = () => {
    const newName = prompt("Enter your name:", loginInfo.name);
    const newPhone = prompt("Enter your phone number (or leave blank):", loginInfo.phone);
    const newEmail = prompt("Enter your email address (or leave blank):", loginInfo.email);

    if (newName && (newPhone || newEmail)) {
      setLoginInfo({ name: newName, phone: newPhone || "", email: newEmail || "" });
    } else {
      alert("Please provide either a phone number or email address.");
    }
  };

  const handleAddressSelect = (id) => {
    const address = addresses.find((address) => address.id === id);
    setSelectedAddress(address);
  };

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      {
        ...newAddress,
        id: addresses.length + 1,
      },
    ]);
    setNewAddress({ name: "", type: "", phone: "", address: "", pincode: "" });
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Left Section */}
        <Col md={8}>
          {/* Step 1: Login */}
          <div className="border p-3 mb-3">
            <h6>1. LOGIN</h6>
            <p className="mb-1">
              <strong>{loginInfo.name}</strong> &nbsp;
              {loginInfo.phone && <span className="text-muted">+{loginInfo.phone}</span>}
              {loginInfo.email && <span className="text-muted ms-2">({loginInfo.email})</span>}
              <Button variant="link" className="p-0 ms-3" onClick={handleLoginChange}>
                Change
              </Button>
            </p>
          </div>

          {/* Step 2: Delivery Address */}
          <div className="border p-3 mb-3">
            <h6>2. DELIVERY ADDRESS</h6>
            {addresses.map((address) => (
              <div
                key={address.id}
                className={`p-3 mb-2 ${
                  selectedAddress.id === address.id ? "border-primary" : "border"
                }`}
              >
                <Form.Check
                  type="radio"
                  id={`address-${address.id}`}
                  label={
                    <>
                      <strong>{address.name}</strong> &nbsp;
                      <span className="badge bg-light text-dark">{address.type}</span>{" "}
                      <span>{address.phone}</span>
                      <p className="mb-0">
                        {address.address} - {address.pincode}
                      </p>
                    </>
                  }
                  name="deliveryAddress"
                  checked={selectedAddress.id === address.id}
                  onChange={() => handleAddressSelect(address.id)}
                />
                {selectedAddress.id === address.id && (
                  <Button variant="warning" className="mt-2">
                    Deliver Here
                  </Button>
                )}
              </div>
            ))}
            <Button variant="link" className="p-0" onClick={() => setShowModal(true)}>
              + Add a new address
            </Button>
          </div>

          {/* Step 3: Order Summary */}
          <div className="border p-3 mb-3">
            <h6>3. ORDER SUMMARY</h6>
            <p>Details of items will be shown here (Dynamic content).</p>
          </div>

          {/* Step 4: Payment Options */}
          <div className="border p-3">
            <h6>4. PAYMENT OPTIONS</h6>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Credit/Debit Card</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter card number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expiry">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="Enter CVV" />
                    </Form.Group>
                    <Button variant="success">Pay ₹702</Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Net Banking</Accordion.Header>
                <Accordion.Body>
                  <p>Select your bank and proceed to payment.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>UPI</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="upiId">
                      <Form.Label>UPI ID</Form.Label>
                      <Form.Control type="text" placeholder="Enter your UPI ID" />
                    </Form.Group>
                    <Button variant="success">Pay ₹702</Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>

        {/* Right Section */}
        <Col md={4}>
          <div className="border p-3">
            <h5>PRICE DETAILS</h5>
            <hr />
            <p className="d-flex justify-content-between">
              <span>Price (1 item)</span>
              <span>₹699</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Delivery Charges</span>
              <span className="text-success">₹70 Free</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Platform Fee</span>
              <span>₹3</span>
            </p>
            <hr />
            <h6 className="d-flex justify-content-between">
              <span>Total Payable</span>
              <span>₹702</span>
            </h6>
            <p className="text-success">Your Total Savings on this order ₹1,297</p>
            <hr />
            <p className="text-muted">
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </p>
          </div>
        </Col>
      </Row>

      {/* Add New Address Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Address Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Home, Work"
                value={newAddress.type}
                onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                value={newAddress.phone}
                onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pincode"
                value={newAddress.pincode}
                onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddAddress}>
            Save Address
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PaymentPage;
