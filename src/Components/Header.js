import React, { useState } from 'react';
// import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css'
// import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";


const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const myFunction=()=> {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className='text-white'  as={Link} to='/'>Takuya Matsuyama</Navbar.Brand>
                    <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link as={Link} to='/'>Home</Nav.Link> */}
                            <Nav.Link className='text-white'  as={Link} to='/work'>Work</Nav.Link>
                            <Nav.Link className='text-white'  as={Link} to='/post'>Post</Nav.Link>
                           
                        </Nav>
                        <Nav className='ms-auto'> 
                            <p onClick={myFunction}>
                                <DarkModeToggle

                                    className='dark-mode'
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={80}
                                />
                         </p>

                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;