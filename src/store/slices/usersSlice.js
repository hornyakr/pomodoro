import { createSlice, current } from "@reduxjs/toolkit";
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
  reducers: {
    addUser: (state, action) => {
      const prevState = current(state);
      if (!prevState.find((user) => user.email === action.payload.email)) {
        const newUser = {
          id: prevState[prevState.length - 1].id + 1,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
        };
        const newState = state.concat(newUser);
        localStorage.setItem("users", JSON.stringify(newState));
        return newState;
      }
      alert("Foglalt email cím!");
    },
    removeUser: (state, action) => {
      const prevState = current(state);
      const newUsers = prevState.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(newUsers));
      //MINDENT TÖRÖLNI KELL A LOCALBAN!!!!
      return newUsers;
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export const allUser = (state) => state.users;

export default usersSlice.reducer;
