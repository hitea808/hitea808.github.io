import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import history from '../img/history.jpeg';
import gallery1 from '../img/gallery/1.jpeg';
import gallery2 from '../img/gallery/2.jpeg';
import gallery3 from '../img/gallery/3.jpeg';
import gallery4 from '../img/gallery/4.jpeg';
import gallery5 from '../img/gallery/5.jpeg';
import gallery6 from '../img/gallery/6.jpeg';
import gallery7 from '../img/gallery/7.jpeg';
import gallery8 from '../img/gallery/8.jpeg';
import gallery9 from '../img/gallery/9.jpeg';
import gallery10 from '../img/gallery/10.jpeg';
import "../css/AboutComponent.css";

const AboutComponent = () => {
    return (
        <Container id="about">
            <h2 className="title">ABOUT</h2>
            <Row>
                <Col sm={6}>
                    <h3>History</h3>
                    <br />
                    <p id="history-summary">
                        Since 2015, HiTEA Cafe has been delighting Honolulu with outstanding boba creations and authentic Asian fare. Our fresh smoothies, teas, and scratch-made meals keep customers coming back. Customize your dream drink and taste our passion for freshness.
                    </p>
                    <br />
                    <p>
                        We look forward to meeting you!
                    </p>
                </Col>
                <Col id="about-img-container" sm={6}>
                    <div id="about-img-box">
                    <Image id="about-img" src={history} alt="food" />
                    </div>
                </Col>
            </Row>
            <br />
            <hr />
            <br />
            <h3>Gallery</h3>
            <Row>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery1} alt="gallery-img" /></Col>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery2} alt="gallery-img" /></Col>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery3} alt="gallery-img" /></Col>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery4} alt="gallery-img" /></Col>
                <Col className="gallery-container gone"><Image className="gallery-img" src={gallery5} alt="gallery-img" /></Col>
            </Row>
            <Row>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery6} alt="gallery-img" /></Col>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery7} alt="gallery-img" /></Col>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery8} alt="gallery-img" /></Col>
                <Col className="gallery-container"><Image className="gallery-img" src={gallery9} alt="gallery-img" /></Col>
                <Col className="gallery-container gone"><Image className="gallery-img" src={gallery10} alt="gallery-img" /></Col>
            </Row>
        </Container>
    )
}

export default AboutComponent;