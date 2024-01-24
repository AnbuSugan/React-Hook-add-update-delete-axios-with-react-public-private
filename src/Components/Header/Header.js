import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import { useAuth } from "../auth";

const Header = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="sticky-top  navBg">
        <Container>
          <Navbar.Brand href="#" className="logo">
            <Row>
              <Col>
                <img
                  src="/logo1.jpg"
                  alt="Logo"
                  height="60"
                  className="d-inline-block align-top"
                />
              </Col>
              <Col>
                <div className="logoHead1">Enlight</div>
                <div className="logoHead2">Educational Institution</div>
              </Col>
            </Row>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="collapsibleNavbar" />

          <Navbar.Collapse
            id="collapsibleNavbar"
            className="justify-content-end d-xl-block"
          >
            <div className="navBar">
              <Nav className="navbar-nav fs-5">
                {!auth.userName ? (
                  <>
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link href="#">Add to Courses</Nav.Link>

                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

                    <i class="bi bi-person-circle text-white ms-5 mt-3">
                      {auth.userName}
                    </i>
                  </>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
