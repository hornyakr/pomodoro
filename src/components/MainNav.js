import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logedIn, signOut } from "../store/slices/userSlice";
import Login from "./Login";
import Registration from "./Registration";
import { useDispatch } from "react-redux";
import { removeGoals } from "../store/slices/goalsSlice";
import { removeTasks } from "../store/slices/tasksSlice";
import { removeTurns } from "../store/slices/turnsSlice";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function MainNav() {
  const expand = "md";
  const dispatch = useDispatch();
  const user = useSelector(logedIn);

  const [showLogin, setshowLogin] = useState(false);
  const [showRegistration, setshowRegistration] = useState(false);

  const signOutHandler = () => {
    dispatch(signOut());
    dispatch(removeGoals());
    dispatch(removeTasks());
    dispatch(removeTurns());
  };
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
            {user ? (
              <div className="d-flex flex-column align-items-end">
                <span className="text-white">Üdv {user.firstName}!</span>
                <button
                  onClick={signOutHandler}
                  className="bg-transparent border-0 text-primary p-0"
                >
                  Kijelentkezés
                </button>
              </div>
            ) : (
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
            )}
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
/* <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand d-flex align-items-center me-5" to="/">
          <img src="/tomato.png" alt="Logó" width="50" />
          <span className="text-white fs-2 ms-3">Pomodoro</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link to="/" className="text-decoration-none text-white">
                Főoldal
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                to="/users/profile"
                className="text-decoration-none text-white"
              >
                Felhasználók
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <div className="d-flex flex-column align-items-end">
                <span className="text-white">Üdv {user.firstName}!</span>
                <button
                  onClick={signOutHandler}
                  className="bg-transparent border-0 text-primary p-0"
                >
                  Kijelentkezés
                </button>
              </div>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
      <Login
        changeShow={(showLogin) => setshowLogin(showLogin)}
        show={showLogin}
      />
      <Registration
        changeShow={(showRegistration) => setshowRegistration(showRegistration)}
        show={showRegistration}
      />
    </nav> */
