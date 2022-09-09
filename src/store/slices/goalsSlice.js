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
  reducers: {},
});

export default goalsSlice.reducer;
