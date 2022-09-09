import React, { useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logedIn } from "../store/slices/userSlice";
import { addGoal, myGoals } from "../store/slices/goalsSlice";
import { myTasks } from "../store/slices/tasksSlice";
import { myTurns } from "../store/slices/turnsSlice";
import MyGoal from "../components/MyGoal";

export default function MyScreen() {
  const user = useSelector(logedIn);
  const goals = useSelector(myGoals);
  const tasks = useSelector(myTasks);
  const turns = useSelector(myTurns);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [newQuestion, setnewQuestion] = useState("");

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addGoal({ question: newQuestion, userId: user.id }));
  };
  return (
    <div className="container my-5 pb-5">
      <h1 className="mb-3">Céljaim</h1>
      <Accordion flush>
        {goals.map((goal, index) => {
          const goalsTasks = tasks.filter((task) => task.goalId === goal.id);
          const goalsTasksTurns = [];
          turns.forEach((turn) =>
            goalsTasks.forEach((task) => {
              if (task.id === turn.taskId) goalsTasksTurns.push(turn);
            })
          );
          return (
            <MyGoal
              key={goal.id}
              index={index}
              goal={goal}
              tasks={goalsTasks}
              turns={goalsTasksTurns}
            />
          );
        })}
      </Accordion>
      <hr />
      <div
        style={{
          backgroundColor: "rgba(25,135,84,0.1)",
          padding: "0 1em 0.5em",
          border: "0.3em solid rgba(25,135,84,1)",
          borderRadius: "0.5em",
        }}
      >
        <h5 className="mt-3">Új cél hozzáadása</h5>
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
            <label htmlFor="question" className="form-label">
              Frappáns kérdés:
            </label>
            <input
              className="form-control"
              type="text"
              id="question"
              onChange={(e) => setnewQuestion(e.target.value)}
              required
            />
          </div>
          <Button variant="success" type="submit">
            Hozzáadás
          </Button>
        </form>
      </div>
    </div>
  );
}
