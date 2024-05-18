import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../img/logo.png';

import {
    Instagram,
    Envelope
} from "react-bootstrap-icons";
import "../css/NavbarComponent.css";

const NavbarComponent = () => {
    return (
        <Navbar id="navbar" fixed="top">
            <Col>
                <Row className="w-100 justify-content-evenly align-items-center">
                    <Col className="text-center">
                        <Instagram size={30} /> {' '}
                        <Envelope size={35} />
                    </Col>
                    <Col className="text-center">
                        <Image id="logo" src={logo} alt="Logo" />
                    </Col>
                    <Col className="text-center">
                        <button className="sec-color">ORDER ONLINE</button>
                    </Col>
                </Row>
                <Row className="w-100 d-flex justify-content-center align-items-center">
                    <Nav className='justify-content-center w-100'>
                        <Nav.Link className='nav-link' href="#">HOME</Nav.Link>
                        <Nav.Link className='nav-link' href="#">MENU</Nav.Link>
                        <Nav.Link className='nav-link' href="#">LOCATION</Nav.Link>
                        <Nav.Link className='nav-link' href="#">ABOUT</Nav.Link>
                    </Nav>
                </Row>
            </Col>
        </Navbar>
    )
}

export default NavbarComponent;