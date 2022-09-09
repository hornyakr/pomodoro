import React from "react";
import { Accordion } from "react-bootstrap";
import MyTask from "./MyTask";

export default function MyGoal(props) {
  const { index, goal, tasks, turns } = props;
  const startAt = goal.startAt ? goal.startAt.split("T") : "inaktív";
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
      </Accordion.Body>
    </Accordion.Item>
  );
}
