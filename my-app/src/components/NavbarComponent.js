import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import {

} from "react-bootstrap-icons";
import "../css/NavbarComponent.css";

const NavbarComponent = () => {
    return (
        <Navbar id="navbar" fixed="top">
            <Row className="w-100 justify-content-evenly">
                <Col className="text-center">
                    <h1>icons</h1>
                </Col>
                <Col className="text-center">
                    <Image src="img/logo.png" rounded />
                    {/* my-app/src/img/logo.png */}
                </Col>
                <Col className="text-center">
                    <h1>order now</h1>
                </Col>
            </Row>
        </Navbar>
    )
}

export default NavbarComponent;