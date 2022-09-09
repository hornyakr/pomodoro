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
    removeTasks: (state) => {
      return [];
    },
  },
});

export const { removeTasks, tasksByIds } = tasksSlice.actions;

export const myTasks = (state) => state.tasks;

export default tasksSlice.reducer;
