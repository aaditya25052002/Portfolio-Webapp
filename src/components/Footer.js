import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aditya-tiwari-53b434207/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/adityatiwarii25/">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/aaditya25052002">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
