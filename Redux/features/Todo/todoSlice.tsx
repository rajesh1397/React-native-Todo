import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface TodoState {
  title: string;
  isCompleted: boolean;
}

const initialState = {
  todoList: [
    {
      title: 'Code',
      isCompleted: true,
    },
    {
      title: 'Meeting with team at 9',
      isCompleted: false,
    },
    {
      title: 'Check Emails',
      isCompleted: false,
    },
    {
      title: 'Write an article',
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.todoList.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todoList[action.payload].isCompleted =
        !state.todoList[action.payload].isCompleted;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      let {todoList} = state;
      state.todoList = todoList.filter((_, itemI) => itemI !== action.payload);
    },
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
