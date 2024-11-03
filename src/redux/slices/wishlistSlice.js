import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //action to add items into wishlist
        addWishlistItem:(state,action)=>{
            state.push(action.payload)
        },
        //action to remove from wishlist
        removeWishlistItem:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addWishlistItem,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer