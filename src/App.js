import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import MyScreen from "./screens/MyScreen";
import MainNav from "./components/MainNav";
import UsersScreen from "./screens/UsersScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GoalsScreen from "./screens/GoalsScreen";
import TasksScreen from "./screens/TasksScreen";
import TurnsScreen from "./screens/TurnsScreen";

function App() {
  const yearNow = new Date().getFullYear();

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
