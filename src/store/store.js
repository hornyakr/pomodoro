import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import userReducer from "./slices/userSlice";
import turnsReducer from "./slices/turnsSlice";
import tasksReducer from "./slices/tasksSlice";
import goalsReducer from "./slices/goalsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    turns: turnsReducer,
    tasks: tasksReducer,
    goals: goalsReducer,
  },
});
