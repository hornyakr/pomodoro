import { createSlice, current } from "@reduxjs/toolkit";
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
    addGoal: (state, action) => {
      const ids = current(state).map((task) => task.id);
      const newGoal = action.payload;
      newGoal.id = ids.map((id) => id).length === 0 ? 1 : Math.max(...ids) + 1;
      newGoal.startAt = null;
      newGoal.finishAt = null;
      newGoal.rating = null;
      const localGoals = JSON.parse(localStorage.getItem("goals"));
      localStorage.setItem("goals", JSON.stringify(localGoals.concat(newGoal)));
      return state.concat(newGoal);
    },
    removeGoals: (state) => {
      return [];
    },
  },
});

export const { goalsById, removeGoals, addGoal } = goalsSlice.actions;

export const myGoals = (state) => state.goals;

export default goalsSlice.reducer;
