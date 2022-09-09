import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function Login(props) {
  const { show, changeShow } = props;

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [stayLogged, setstayLogged] = useState("");

  function RegisterClick() {
    document.querySelector("#registerButton").click();
    changeShow(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Offcanvas
      show={show}
      onHide={() => changeShow(false)}
      backdrop="static"
      placement="end"
    >
      <Offcanvas.Header>
        <Offcanvas.Title>Bejelentkezés</Offcanvas.Title>
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
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="stayLogged"
              onChange={(e) => setstayLogged(e.target.value)}
            />
            <label className="form-check-label" htmlFor="stayLogged">
              Bejelentkezve maradok.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Bejelentkezés
          </button>
        </form>
        <div className="text-center my-3">
          Még nem regisztráltál?{" "}
          <button
            onClick={RegisterClick}
            className="fw-bolder bg-transparent border-0 text-primary"
          >
            Regisztráció
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
