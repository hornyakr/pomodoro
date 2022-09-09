import { createSlice, current } from "@reduxjs/toolkit";
import { turns } from "../../data/data";

const initialState = [];

if (
  !localStorage.getItem("turns") &&
  !JSON.parse(localStorage.getItem("turns"))
) {
  localStorage.setItem("turns", JSON.stringify(turns));
}

const turnsSlice = createSlice({
  name: "turns",
  initialState,
  reducers: {
    turnsByIds: (state, action) => {
      if (current(state).length < 1) {
        const states = JSON.parse(localStorage.getItem("turns"));
        const newTurns = [];
        action.payload.forEach((id) =>
          states.forEach((turn) => {
            if (turn.taskId === id) newTurns.push(turn);
          })
        );
        return newTurns;
      }
    },
    finishTurn: (state, action) => {
      state.find((turn) => turn.id === action.payload).finishAt =
        Date().toString();
      localStorage.setItem("turns", JSON.stringify(state));
    },
    removeTurns: (state) => {
      return [];
    },
  },
});

export const { turnsByIds, removeTurns, finishTurn, addTurn } =
  turnsSlice.actions;

export const myTurns = (state) => state.turns;

export default turnsSlice.reducer;
