import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function MainNav() {
  const expand = "md";

  const [showLogin, setshowLogin] = useState(false);
  const [showRegistration, setshowRegistration] = useState(false);

  return (
    <Navbar
      key={expand}
      bg="dark"
      variant="dark"
      expand={expand}
      className="bg-gradient"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="/img/tomato.png" alt="Logó" width="50" />
          <span className="text-white fs-3 ms-3">Pomodoro</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="text-bg-dark"
        >
          <Offcanvas.Header closeVariant="white" closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menü
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav as={"nav"} className="justify-content-start flex-grow-1 ps-3">
              <Nav.Link as={Link} to="/">
                Főoldal
              </Nav.Link>
              <Nav.Link as={Link} to="/users/profile">
                Felhasználók
              </Nav.Link>
            </Nav>
            <div className="mt-4 m-md-0">
              <button
                id="loginButton"
                type="button"
                className="btn btn-outline-primary"
                onClick={() =>
                  showLogin ? setshowLogin(false) : setshowLogin(true)
                }
              >
                Bejelentkezés
              </button>
              <button
                id="registerButton"
                type="button"
                className="btn btn-primary ms-3"
                onClick={() =>
                  showRegistration
                    ? setshowRegistration(false)
                    : setshowRegistration(true)
                }
              >
                Regisztráció
              </button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <Login
        changeShow={(showLogin) => setshowLogin(showLogin)}
        show={showLogin}
      />
      <Registration
        changeShow={(showRegistration) => setshowRegistration(showRegistration)}
        show={showRegistration}
      />
    </Navbar>
  );
}
