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
    addTurn: (state, action) => {
      const ids = current(state).map((turn) => turn.id);
      const newTurn = action.payload;
      newTurn.id = ids.map((id) => id).length === 0 ? 1 : Math.max(...ids) + 1;
      const localTurns = JSON.parse(localStorage.getItem("turns"));
      localStorage.setItem("turns", JSON.stringify(localTurns.concat(newTurn)));
      return state.concat(newTurn);
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
