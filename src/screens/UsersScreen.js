import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import User from "../components/User";
import { allUser } from "../store/slices/usersSlice";

export default function UsersScreen() {
  const users = useSelector(allUser);
  const allGoal = JSON.parse(localStorage.getItem("goals"));
  const allTask = JSON.parse(localStorage.getItem("tasks"));
  const allTurn = JSON.parse(localStorage.getItem("turns"));

  return (
    <div className="container my-5 pb-5">
      <nav>
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/users/profile"}>
              Személyes profil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/users/goals"}>
              Célok
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/users/tasks"}>
              Feladatok
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/users/turns"}>
              Körök
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
      {users.map((user) => {
        const goals = allGoal.filter((goal) => goal.userId === user.id);
        const tasks = goals.map((goal) =>
          allTask.filter((task) => task.goalId === goal.id)
        );
        const turns = [];
        tasks.forEach((taskArr) => {
          taskArr.forEach((task) =>
            turns.push(allTurn.filter((turn) => turn.taskId === task.id))
          );
        });
        return (
          <User
            key={user.id}
            user={user}
            goals={goals}
            tasks={tasks}
            turns={turns}
          />
        );
      })}
    </div>
  );
}
