import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="mt-5 footer">
        <Container>
          <Row>
            <Col>
              <div className="footOne">
                <h1>Enlight</h1>
                <p>
                  100% Job Placement Support.
                  <br />
                  Mentors from Top Global Product companies.
                  <br />A Portfolio of Real-world Projects.
                  <br />
                  Globally Recognized Certification.
                </p>
                <div className="footIcon">
                  <i class="bi bi-twitter me-2 fs-3"></i>

                  <i class="bi bi-facebook me-2 fs-3"></i>
                  <i class="bi bi-instagram me-2 fs-3"></i>
                  <i class="bi bi-linkedin  me-2 fs-3"></i>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footTwo">
                <h3>Useful Links</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Terms of service</p>
                <p>Privacy Policy</p>
              </div>
            </Col>
            <Col>
              <div className="footThree">
                <h3>Our Services</h3>
                <p>Web Desighn</p>
                <p>Web Development</p>
                <p>Product Management</p>
                <p>Marketing</p>
                <p>Graphic Desighn</p>
              </div>
            </Col>
            <Col>
              <div className="footFour">
                <h3>Contact Us</h3>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
                <br />
                <br />
                <p>Phone: +1 5589 55488 55</p>
                <p>Email: info@example.com</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div class="container mt-4">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Logis</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">Designed by BootstrapMade</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
