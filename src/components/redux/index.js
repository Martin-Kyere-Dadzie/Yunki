// import { createStore } from "redux";
// // import FavProducts from "../FavProducts";

// const reducerFn = (state = {counter: null}, action) => {

    
//     if (action.type === "INC") {
//         return {
//             counter: state.counter + 1
//         }
//     }    
//     return state
// }

// const store = createStore(reducerFn);

// export default store;

import { configureStore, createSlice } from '@reduxjs/toolkit';

const shoppingBagSlice = createSlice({
    name: 'counter',
    initialState: { counter: null },
    reducers: {
        increment(state, action) {
            state.counter++;
        }
    }
})

export const actions = shoppingBagSlice.actions;

const store = configureStore({
    reducer: shoppingBagSlice.reducer
})

export default store;