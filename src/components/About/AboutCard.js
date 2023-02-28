import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shraddha Iyer, </span>
            <br />A CS Grad at NYU Courant Institute of Mathematical Sciences
            <br />
            <br />
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
