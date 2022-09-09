import { createSlice } from "@reduxjs/toolkit";
import { goals } from "../../data/data";

const initialState = [];

if (
  !localStorage.getItem("goals") &&
  !JSON.parse(localStorage.getItem("goals"))
) {
  localStorage.setItem("goals", JSON.stringify(goals));
}

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    goalsById: (state, action) => {
      const states = JSON.parse(localStorage.getItem("goals"));
      const newGoals = states.filter((x) => x.userId === action.payload);
      return newGoals;
    },
    removeGoals: (state) => {
      return [];
    },
  },
});

export const { removeGoals, goalsById } = goalsSlice.actions;

export const myGoals = (state) => state.goals;

export default goalsSlice.reducer;
