import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logedIn } from "../store/slices/userSlice";
import { myGoals } from "../store/slices/goalsSlice";
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
    </div>
  );
}
