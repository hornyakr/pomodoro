import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import FelhasznaloiFeltetelekModal from "./FelhasznaloiFeltetelekModal";

export default function Registration(props) {
  const { show, changeShow } = props;
  const [modalShow, setModalShow] = useState(false);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [comfirmPassword, setcomfirmPassword] = useState("");

  function LoginClick() {
    document.querySelector("#loginButton").click();
    changeShow(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => changeShow(false)}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Regisztráció</Offcanvas.Title>
          <button
            type="button"
            className="btn-close"
            onClick={() => changeShow(false)}
            aria-label="Close"
          ></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Vezetéknév
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Keresztnév
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email cím
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
                onChange={(e) => setemail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Az email címedet soha nem osztjuk meg harmadik féllel.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Jelszó
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comfirmPassword" className="form-label">
                Jelszó megerősítése
              </label>
              <input
                type="password"
                className="form-control"
                id="comfirmPassword"
                required
                onChange={(e) => setcomfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="userCondCheck"
                required
              />
              <label className="form-check-label" htmlFor="userCondCheck">
                Elfogadom a{" "}
                <button
                  onClick={() => setModalShow(true)}
                  className="bg-transparent border-0 text-primary p-0"
                >
                  felhasználói feltételek
                </button>
                et.
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Regisztráció
            </button>
          </form>
          <div className="text-center my-3">
            Már regisztráltál?{" "}
            <button
              onClick={LoginClick}
              className="fw-bolder bg-transparent border-0 text-primary"
            >
              Bejelentkezés
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <FelhasznaloiFeltetelekModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
