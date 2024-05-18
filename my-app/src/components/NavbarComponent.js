import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../img/logo.png';
import Button from 'react-bootstrap/Button';

import {
    Instagram,
    Envelope
} from "react-bootstrap-icons";
import "../css/NavbarComponent.css";

const NavbarComponent = () => {
    return (
        <Navbar id="navbar" fixed="top">
            <Row className="w-100 justify-content-evenly align-items-center">
                <Col className="text-center">
                    <Instagram size={30} /> {' '}
                    <Envelope size={35} />
                </Col>
                <Col className="text-center">
                    <Image id="logo" src={logo} alt="Logo"/>
                </Col>
                <Col className="text-center">
                <button className="sec-color">ORDER ONLINE</button>
                </Col>
            </Row>
        </Navbar>
    )
}

export default NavbarComponent;