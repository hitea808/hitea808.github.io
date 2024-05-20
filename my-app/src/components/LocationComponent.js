import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/LocationComponent.css";

const LocationComponent = () => {
    return (
        <div id="location-background">
            {/* <h2 className="title">LOCATION</h2> */}
            <Row style={{ padding: '0px', margin: '0px' }}>
                <Col>
                    <div id="location-section">
                        <br />
                        <br />
                        <h2 className="title">LOCATION</h2>
                        <br />
                        <br />
                        <h3>Address</h3>
                        <h3 id="location-box">The Lanai Food Court @ Ala Moana</h3>
                        <h4>1450 Ala Moana Blvd. Honolulu, HI 96814</h4>
                        <br />
                        <h3>Hours</h3>
                        <h4>Monday - Thursday: 10:30 am to 7:00 pm</h4>
                        <h4>Friday - Saturday: 10:30 am to 8:00 pm</h4>
                        <h4>Sunday: 10:30 am to 6:00 pm</h4>
                        <br />
                        <br />
                        <br />
                    </div>
                </Col>
                <Col id="location-image-container">
                    <div>
                        {/* <Image className="loc-img" src={locationIMG} alt="locationIMG" /> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LocationComponent;