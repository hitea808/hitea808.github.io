import React from "react";
import Container from 'react-bootstrap/Container';
import "../css/LocationComponent.css";

const LocationComponent = () => {
    return (
        <div id="location-background">
            <Container id="location-container">
            <h2 className="title">LOCATION</h2>
            <br />
            <br />
            <div id="location-section">
                <h3>Address</h3>
                <h4 id="location-box">The Lanai Food Court @ Ala Moana</h4>
                <h5>1450 Ala Moana Blvd. Honolulu, HI 96814</h5>
                <br />
                <h3>Hours</h3>
                <h5>Monday - Thursday: 10:30 am to 7:00 pm</h5>
                <h5>Friday - Saturday: 10:30 am to 8:00 pm</h5>
                <h5>Sunday: 10:30 am to 6:00 pm</h5>
            </div>
        </Container>
        </div>
    )
}

export default LocationComponent;