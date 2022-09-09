import { createSlice } from "@reduxjs/toolkit";
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
    removeTurns: (state) => {
      return [];
    },
  },
});

export const { turnsByIds, removeTurns, finishTurn, addTurn } =
  turnsSlice.actions;

export const myTurns = (state) => state.turns;

export default turnsSlice.reducer;
