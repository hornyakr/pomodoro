import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/tasksSlice";
import MyTask from "./MyTask";

export default function MyGoal(props) {
  const { index, goal, tasks, turns } = props;
  const startAt = goal.startAt ? goal.startAt.split("T") : "inaktív";

  const [newDescription, setnewDescription] = useState("");

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTask({ description: newDescription, goalId: goal.id }));
  };
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <div>
          <h4 className="m-0 mb-2">{goal.question}</h4>
          <div className="d-flex">
            <div className="text-muted me-3">
              <b className="me-2">Elkezdve:</b>
              {startAt !== "inaktív"
                ? `${startAt[0]} ${startAt[1].slice(0, 5)}`
                : startAt}
            </div>
            <div className="text-muted me-3">
              <b className="me-2">Befejezve:</b>
              {goal.finisAt ? goal.finisAt : "inaktív"}
            </div>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {tasks
          ? tasks.map((task) => {
              const taskTurns = turns.filter((turn) => turn.taskId === task.id);
              return <MyTask key={task.id} task={task} turns={taskTurns} />;
            })
          : "Nincsenek feladatok"}
        <h5>Új feladat hozzáadása</h5>
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
            <label htmlFor="description" className="form-label">
              Feladat leírása:
            </label>
            <input
              className="form-control"
              type="text"
              id="description"
              onChange={(e) => setnewDescription(e.target.value)}
              required
            />
          </div>
          <Button variant="success" type="submit">
            Hozzáadás
          </Button>
        </form>
      </Accordion.Body>
    </Accordion.Item>
  );
}
