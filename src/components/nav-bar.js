import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar () {
    return (
        <Navbar collapseOnSelect fixed="top" bg="dark" expand="xxl" variant="dark">
            <Navbar.Brand href="/">Dede-Display</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/lct-msg">
                        <Nav.Link>Standortmeldung</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/react-table">
                        <Nav.Link>React Table</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
