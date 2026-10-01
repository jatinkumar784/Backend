// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   //This is a state for holding data
//   initialState: {
//     count: 0,
//   },
//   //Here is the actions for updating the state
//   reducers:{
//     increament: (state) => {
//         state.count++;
//     },
//     decreament: (state) => {
//         state.count--;
//     },
//   }
// });

// console.log("slice->", counterSlice);

// export const { increament, decreament } = counterSlice.actions;


// export default counterSlice.reducer;

import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "count",
    initialState:{
        count:0,
    },
    reducers:{
        increment: (state) => {state.count++;},
        decrement: (state) => {state.count--;}
    },
});

export const {increment , decrement } = counterSlice.actions;
export default counterSlice.reducer