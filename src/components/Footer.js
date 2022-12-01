import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import gun from "../assets/img/Gun.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github2.png";
import navIcon3 from "../assets/img/mail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={gun} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/patsathorn-charoensiri-722409249/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/MartinCats"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=patsathorn.c@kkumail.com&tf=cm"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
