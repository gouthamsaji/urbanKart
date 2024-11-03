import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        //action to add item into cart
        addItemToCart : (state,action) => {
            state.push(action.payload)
        },
        //action to remove item from cart
        removeCartItem : (state,action) => {
            return state.filter((item)=>item.id!=action.payload)
        },
        //action to empty cart on checkout
        emptyCart : (state,action) => {
            return state = []
        }
    }
})

export const {addItemToCart,removeCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer