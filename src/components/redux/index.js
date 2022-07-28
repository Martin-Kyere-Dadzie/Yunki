import { configureStore, createSlice } from '@reduxjs/toolkit';
import bagSlice from './BagSlice';

const store = configureStore({
    reducer: {
        bag: bagSlice.reducer
    }
})

export default store;