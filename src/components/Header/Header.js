import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                <FontAwesomeIcon icon={faBookOpen} />{' '}
                EDExplorer
                </Navbar.Brand>
                <Nav className="me-auto justify-content-end">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/teach">Teach On EDExplorer</Nav.Link>
                </Nav>
            </Container>
                
            </Navbar>           
        </div>
    );
};

export default Header;