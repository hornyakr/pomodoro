import { Button, Form } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logedIn } from "../store/slices/userSlice";

import "./homeScreen.css";

export default function HomeScreen() {
  const user = useSelector(logedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${user.id}`);
    }
  }, [user, navigate]);

  const showUsers = () => {
    navigate("/users/profile");
  };

  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [elements, setElements] = useState([]);
  const [isActive0, setIsActive0] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const focused0 = useRef();
  const focused1 = useRef();
  const focused2 = useRef();

  useEffect(() => {
    const addOrRemoveElement = (e) => {
      const id = e.srcElement.id;
      const inIt = elements.some((index) => id === index);
      inIt
        ? setElements(elements.filter((index) => id !== index))
        : setElements(elements.concat(id));
    };

    const el0 = focused0.current;
    const el1 = focused1.current;
    const el2 = focused2.current;
    el0.addEventListener("click", addOrRemoveElement);
    el1.addEventListener("click", addOrRemoveElement);
    el2.addEventListener("click", addOrRemoveElement);
    return () => {
      el0.addEventListener("click", addOrRemoveElement);
      el1.addEventListener("click", addOrRemoveElement);
      el2.addEventListener("click", addOrRemoveElement);
    };
  }, [elements]);

  return (
    <div>
      <div className="position-relative topWrapper">
        <img
          src="/img/pomodoroWithLaptop.jpg"
          className="pomodoroImg"
          alt="Pomodoro with laptop"
        />
        <div className="container">
          <div className="position-relative loginHeader">
            <h1 className="text-danger">Pomodoro-app</h1>
            <h4 className="text-uppercase text-white">
              Az alkalmazás használatához szükséges bejelentkezned
            </h4>
            <Button
              variant="success"
              size="lg"
              className="mt-4"
              onClick={showUsers}
            >
              Lássuk a felhasználókat
            </Button>
          </div>
        </div>
      </div>
      <div className="container my-5 pb-5">
        <h1 className="mb-3">Tulajdonság cseréje</h1>
        <Form className="mb-3 d-flex flex-wrap align-items-end">
          <Form.Group className="me-3" controlId="colorInput">
            <Form.Label>Szín</Form.Label>
            <Form.Control
              type="color"
              defaultValue="#000000"
              title="Válassz színt"
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="me-3" controlId="sizeInput">
            <Form.Label>Méret</Form.Label>
            <Form.Control
              type="number"
              defaultValue={18}
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>
          <div>
            <b>Kiválasztott elemek: {elements.length}</b>
          </div>
        </Form>
        <hr />
        <h3 className="mb-3">
          Egy kis random szöveg, aminek változtathatjuk a
          <span
            style={isActive0 ? { color: color, fontSize: `${size}px` } : {}}
            id="0"
            ref={focused0}
            tabIndex={0}
            className={
              isActive0
                ? "cursoring bg-change mx-3 focused"
                : "cursoring bg-change mx-3"
            }
            onClick={() => setIsActive0((current) => !current)}
          >
            méretét
          </span>{" "}
          és{" "}
          <span
            style={isActive1 ? { color: color, fontSize: `${size}px` } : {}}
            id="1"
            ref={focused1}
            tabIndex={0}
            className={
              isActive1
                ? "cursoring bg-change ms-3 focused"
                : "cursoring bg-change ms-3"
            }
            onClick={() => setIsActive1((current) => !current)}
          >
            színét
          </span>
        </h3>
        <p
          style={isActive2 ? { color: color, fontSize: `${size}px` } : {}}
          id="2"
          ref={focused2}
          tabIndex={0}
          className={
            isActive2 ? "cursoring bg-change focused" : "cursoring bg-change"
          }
          onClick={() => setIsActive2((current) => !current)}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          impedit aspernatur id sunt totam ab accusamus numquam autem incidunt
          facilis sit molestias soluta, assumenda ad. Ullam saepe ex animi
          quasi.
        </p>
      </div>
    </div>
  );
}
