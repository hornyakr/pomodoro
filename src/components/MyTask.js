import React from "react";
import { Card } from "react-bootstrap";
import MyTurn from "./MyTurn";

export default function MyTask(props) {
  const { task, turns } = props;
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
      </Card.Body>
    </Card>
  );
}
