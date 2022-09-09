import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { signIn } from "../store/slices/userSlice";
import { removeUser } from "../store/slices/usersSlice";

export default function User(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, email, password, lastName, firstName } = props.user;

  const loginHandler = () => {
    dispatch(
      signIn({
        email: email,
        password: password,
        stayLogged: true,
      })
    );
    navigate("/");
  };

  return (
    <Card className="my-3">
      <Card.Header className="d-flex justify-content-between pt-3">
        <div className="d-flex">
          <h3>{id}</h3>
          <h3 className="ms-3">
            {lastName} {firstName}
          </h3>
        </div>
        <div>
          <Button
            className="me-3"
            variant="outline-primary"
            onClick={loginHandler}
          >
            Bejelentkezés
          </Button>
          <Button variant="danger" onClick={() => dispatch(removeUser(id))}>
            Törlés
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Outlet context={props} />
      </Card.Body>
    </Card>
  );
}
