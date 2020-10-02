import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header style={{ height: "80px", zIndex: "1" }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">Dental Solution</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">{loggedInUser.name}</Nav.Link>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#DentalServices">Dental Services</Nav.Link>
            <Nav.Link href="#Reviews">Reviews</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
