import React from 'react';
// import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Takuya Matsuyama</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link as={Link} to='/'>Home</Nav.Link> */}
                            <Nav.Link as={Link} to='/work'>Work</Nav.Link>
                            <Nav.Link as={Link} to='/post'>Post</Nav.Link>
                           
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;