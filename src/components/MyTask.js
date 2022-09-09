import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTurn } from "../store/slices/turnsSlice";
import MyTurn from "./MyTurn";

export default function MyTask(props) {
  const { task, turns } = props;

  const [newFocus, setnewFocus] = useState(40);
  const [newShift, setnewShift] = useState(5);

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      addTurn({
        focusTime: newFocus,
        shift: newShift,
        finishAt: null,
        taskId: task.id,
      })
    );
  };
  return (
    <Card className="mb-3">
      <Card.Header>
        <h5>{task.description}</h5>
        <div className="d-flex">
          <div className="me-3">
            <b className="me-2">Elkezdve:</b>
            {task.startAt ? task.startAt : "inaktív"}
          </div>
          <div className="me-3">
            <b className="me-2">Befejezve:</b>
            {task.finishAt ? task.finishAt : "inaktív"}
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        {turns.map((turn) => (
          <MyTurn key={turn.id} turn={turn} />
        ))}
        <h5>Új kör hozzáadása</h5>
        <form
          style={{
            backgroundColor: "rgba(25,135,84,0.5)",
            padding: "0.5em 1em",
            border: "0.3em solid rgba(25,135,84,1)",
            borderRadius: "0.5em",
          }}
          onSubmit={submitForm}
          className="d-flex align-items-end"
        >
          <div className="me-3">
            <label htmlFor="focus" className="form-label">
              Fókusz idő:
            </label>
            <input
              className="form-control"
              type="number"
              id="focus"
              max={60}
              min={1}
              onChange={(e) => setnewFocus(e.target.value)}
              defaultValue={40}
              required
            />
          </div>
          <div className="me-3">
            <label htmlFor="shift" className="form-label">
              Szünet:
            </label>
            <input
              className="form-control"
              type="number"
              id="shif"
              max={60}
              min={1}
              onChange={(e) => setnewShift(e.target.value)}
              required
              defaultValue={5}
            />
          </div>
          <Button variant="success" type="submit">
            Hozzáadás
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
