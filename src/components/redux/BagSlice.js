import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'shoppingBag',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showBag: false
    },
    reducers: {
        addToBag(state, action) {
            const newItem = action.payload;
            // first check if the item is already available.
            const existingItem = state.itemsList.find((item) => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++;
                existingItem.price+= newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }

        },
        removeFromBag() {
            
        },
        setShowBag(state) {
            state.showBag = true;
        },
    }
})

export const bagActions = bagSlice.actions;

export default bagSlice;