import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    saveTodo(state, action) {
      state.todo.push({
        id: uuidv4(),
        title: action.payload,
        status: false,
      });
    },
    deleteTodoDone(state, action) {
      state.todo = state.todo.filter((item) => !item.status);
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((item) => item.id != action.payload.id); //
    },
    deleteTodoAll(state, action) {
      state.todo = [];
    },

    editTodo(state, action) {
      state.todo.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
    },

    changeStatus(state, action) {
      state.todo.forEach((item) => {
        if (item.id === action.payload.id) {
          item.status = !item.status;
        }
        return item;
      });
    },
  },
});
export const {
  saveTodo,
  deleteTodo,
  deleteTodoDone,
  deleteTodoAll,
  editTodo,
  changeStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
