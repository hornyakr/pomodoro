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
  reducers: {},
});

export default turnsSlice.reducer;
