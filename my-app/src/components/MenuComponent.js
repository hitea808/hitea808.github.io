import React from "react";
import Container from 'react-bootstrap/Container';
import "../css/MenuComponent.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import menu1 from '../img/Menu_1.jpg';
import menu2 from '../img/Menu_2.jpg';
import menu3 from '../img/Menu_3.jpg';
import menu4 from '../img/Menu_4.jpg';

const MenuComponent = () => {
    return (
        <Container id="menu-container">
            <h2 className="title">MENU</h2>
            <br />
            <br />
            <div id="menu-section">
                <h3>Drinks</h3>
                <Row>
                    <Col><Image className="menu-img" src={menu1} alt="menu1" /></Col>
                    <Col><Image className="menu-img" src={menu2} alt="menu2" /></Col>
                </Row>
                <br />
                <br />
                <h3>Plates</h3>
                <Row>
                    <Col><Image className="menu-img" src={menu3} alt="menu3" /></Col>
                    <Col><Image className="menu-img" src={menu4} alt="menu4" /></Col>
                </Row>
            </div>
        </Container>
    )
}

export default MenuComponent;