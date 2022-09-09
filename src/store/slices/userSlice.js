import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const user = JSON.parse(localStorage.getItem("users")).find(
        (user) => user.email === action.payload.email
      );
      if (user && user.password === action.payload.password) {
        if (action.payload.stayLogged) {
          localStorage.setItem("user", JSON.stringify(user));
        }
        return user;
      }
      alert("Rossz email cím vagy jelszó");
    },
    signOut: (state) => {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const logedIn = (state) => state.user;

export default userSlice.reducer;
