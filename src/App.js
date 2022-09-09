import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import MainNav from "./components/MainNav";

import ErrorScreen from "./screens/ErrorScreen";
import GoalsScreen from "./screens/GoalsScreen";
import TasksScreen from "./screens/TasksScreen";
import TurnsScreen from "./screens/TurnsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import UsersScreen from "./screens/UsersScreen";
import { goalsById, myGoals } from "./store/slices/goalsSlice";
import { myTasks, tasksByIds } from "./store/slices/tasksSlice";
import { turnsByIds } from "./store/slices/turnsSlice";
import { logedIn } from "./store/slices/userSlice";
import MyScreen from "./screens/MyScreen";

function App() {
  const yearNow = new Date().getFullYear();

  const user = useSelector(logedIn);
  const goals = useSelector(myGoals);
  const tasks = useSelector(myTasks);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(goalsById(user.id));
    }
  }, [user, dispatch]);
  useEffect(() => {
    if (goals) {
      const goalIds = goals.map((goal) => goal.id);
      dispatch(tasksByIds(goalIds));
    }
  }, [goals, dispatch]);
  useEffect(() => {
    if (tasks) {
      const taskIds = tasks.map((task) => task.id);
      dispatch(turnsByIds(taskIds));
    }
  }, [tasks, dispatch]);

  return (
    <BrowserRouter>
      <header>
        <MainNav />
      </header>
      <main>
        <Routes>
          <Route path=":id" element={<MyScreen />}></Route>
          <Route path="users" element={<UsersScreen />}>
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="goals" element={<GoalsScreen />} />
            <Route path="tasks" element={<TasksScreen />} />
            <Route path="turns" element={<TurnsScreen />} />
          </Route>
          <Route index element={<HomeScreen />} exact></Route>
          <Route path="*" element={<ErrorScreen />}></Route>
        </Routes>
      </main>
      <footer className="d-flex justify-content-center position-fixed fixed-bottom bg-dark bg-gradient text-white py-3">
        Hornyák Richárd &copy; 2022 - {yearNow} Minden jog fenntartva
      </footer>
    </BrowserRouter>
  );
}

export default App;
