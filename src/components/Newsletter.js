import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col className="text-center">
            <h3>"you miss 100% of the shots you don't take"</h3>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
