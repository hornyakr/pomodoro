import { createSlice, current } from "@reduxjs/toolkit";
import { tasks } from "../../data/data";

const initialState = [];

if (
  !localStorage.getItem("tasks") &&
  !JSON.parse(localStorage.getItem("tasks"))
) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksByIds: (state, action) => {
      if (current(state).length < 1) {
        const states = JSON.parse(localStorage.getItem("tasks"));
        const newTasks = [];
        action.payload.forEach((id) =>
          states.forEach((task) => {
            if (task.goalId === id) newTasks.push(task);
          })
        );
        return newTasks;
      }
    },
    addTask: (state, action) => {
      const ids = current(state).map((task) => task.id);
      const newTask = action.payload;
      newTask.id = ids.map((id) => id).length === 0 ? 1 : Math.max(...ids) + 1;
      newTask.startAt = null;
      newTask.finishAt = null;
      newTask.rating = null;
      const localTasks = JSON.parse(localStorage.getItem("tasks"));
      localStorage.setItem("tasks", JSON.stringify(localTasks.concat(newTask)));
      return state.concat(newTask);
    },
    removeTasks: (state) => {
      return [];
    },
  },
});

export const { tasksByIds, removeTasks, addTask } = tasksSlice.actions;

export const myTasks = (state) => state.tasks;

export default tasksSlice.reducer;
