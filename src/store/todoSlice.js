import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice ({
    name: 'todo',
    initialState: {
        todo: []
    },
    reducers: {
        saveTodo (state,action) {

            // console.log(action);
            // console.log(action.payload)
            state.todo.push({
                id: uuidv4(),
                title: action.payload,
                status: false,
            })
        },
        deleteTodoDone (state,action) {
            console.log('deleteTodoDone')
            state.todo=(state.todo.filter(item => !item.status));
        },
        deleteTodo (state,action) {
            console.log(action.payload)
        state.todo = state.todo.filter(item => item.id != action.payload.id)//
        },
        deleteTodoAll (state,action) {
             console.log('1')
            state.todo = []
        },
        
        editTodo (state,action) {
            console.log(action.payload)
            state.todo.forEach((item) => {
                if (item.id === action.payload.id) {
                  item.title = action.payload.title
                }
                return item
              })
             
        },

        changeStatus (state,action) {
            console.log(action.payload.id)
           state.todo.forEach((item) => {
                if (item.id === action.payload.id) {
                    console.log(item.status)
                  item.status = !item.status;
                }
                return item;
                
              })
              
        },
    },
});
export const {saveTodo,  deleteTodo, deleteTodoDone, deleteTodoAll, editTodo, changeStatus} = todoSlice.actions;
export default todoSlice.reducer;