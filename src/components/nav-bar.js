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
                    <LinkContainer to="/lct-msg-basic">
                        <Nav.Link>Lct Msg Basic</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/lct-msg-sorting">
                        <Nav.Link>Lct Msg Sorting</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/lct-msg-filter">
                        <Nav.Link>Lct Msg Filter</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/lct-msg-page">
                        <Nav.Link>Lct Msg Page</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/table-with-api">
                        <Nav.Link>Table With API</Nav.Link>
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
