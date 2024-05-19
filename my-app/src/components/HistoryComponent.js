import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/HistoryComponent.css";

const HistoryComponent = () => {
    return (
        <Container id="history-container">
            <h2 className="title">ABOUT</h2>
            <Row>
                <Col>
                    <h3>History</h3>
                    <br/>
                    <h5 id="history-summary">
                        Since 2015, HiTEA Cafe has been delighting Honolulu with outstanding boba creations and authentic Asian fare. Our fresh smoothies, teas, and scratch-made meals keep customers coming back. Customize your dream drink and taste our passion for freshness.
                    </h5>
                    <br/>
                    <h5>
                        We look forward to meeting you!
                    </h5>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default HistoryComponent;