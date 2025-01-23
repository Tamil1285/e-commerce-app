import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white">
      <Nav className="flex-column p-3">
        <h4 className="text-center">Menu</h4>
        <Nav.Link href="#dashboard" className="text-white">
          Dashboard
        </Nav.Link>
        <Nav.Link href="#orders" className="text-white">
          Orders
        </Nav.Link>
        <Nav.Link href="#products" className="text-white">
          Products
        </Nav.Link>
        <Nav.Link href="#customers" className="text-white">
          Customers
        </Nav.Link>
        <Nav.Link href="#reports" className="text-white">
          Reports
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
