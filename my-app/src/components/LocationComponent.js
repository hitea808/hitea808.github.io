import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/LocationComponent.css";

const LocationComponent = () => {
    return (
        <div id="location">
            {/* <h2 className="title">LOCATION</h2> */}
            <Row style={{ padding: '0px', margin: '0px' }}>
                <Col sm={6}>
                    <div id="location-section">
                        <br />
                        <br />
                        <h2 className="title">LOCATION</h2>
                        <br />
                        <br />
                        <h3>Address</h3>
                        <p id="location-box">The Lanai Food Court @ Ala Moana</p>
                        <p>1450 Ala Moana Blvd. Honolulu, HI 96814</p>
                        <br />
                        <h3>Hours</h3>
                        <p>Monday - Thursday: 10:30 am to 7:00 pm</p>
                        <p>Friday - Saturday: 10:30 am to 8:00 pm</p>
                        <p>Sunday: 10:30 am to 6:00 pm</p>
                        <br />
                        <br />
                        <br />
                    </div>
                </Col>
                <Col id="location-image-container" >
                    <div>
                        {/* <Image className="loc-img" src={locationIMG} alt="locationIMG" /> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LocationComponent;