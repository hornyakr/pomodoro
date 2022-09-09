import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export default tasksSlice.reducer;
