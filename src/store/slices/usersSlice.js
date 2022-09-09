import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/data";

const initialState = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : users;

if (
  !localStorage.getItem("users") &&
  !JSON.parse(localStorage.getItem("users"))
) {
  localStorage.setItem("users", JSON.stringify(users));
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
