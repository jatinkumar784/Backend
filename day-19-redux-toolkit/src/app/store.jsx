// import {configureStore} from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice";


// const store = configureStore({
//     reducer:{
//         counter
//     },
// });

import{ configureStore} from '@reduxjs/toolkit'
import counterReducer from "../features/counterSlice"
import cartReducer from "../features/cartSlice"
export const store = configureStore({
    reducer: {
        counter:counterReducer,
        cart:cartReducer,
    },
}) ;

// export default store