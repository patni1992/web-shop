import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/" >Simple Web Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">Product catalog</Nav.Link>
                    <Nav.Link as={NavLink} to="/basket-summary">Basket summary</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;