import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'shoppingBag',
    initialState: {
        itemsList: [],
        totalQuantity: null,
        showBag: false
    },

    reducers: {
        addToBag(state, action) {
            const newItem = action.payload;
            console.log(newItem);
            // first check if the item is already available.
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);
            console.log(existingItem);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image,
                    title: newItem.title,
                    colors: newItem.color
                });
                state.totalQuantity++;
            }
        },

        removeFromBag(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find(item => item.id === id);

            
            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !==id);
                state.totalQuantity --;
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },

        deleteProduct(state, action) {
            const id = action.payload;
            state.itemsList = state.itemsList.filter(item => item.id !==id);
            state.totalQuantity --;
        },
        
        clearShoppingBag(state) {
            state.itemsList = false;
        },
        
        setShowBag(state) {
            state.showBag = true;
        },
    }
})

export const bagActions = bagSlice.actions;

export default bagSlice;