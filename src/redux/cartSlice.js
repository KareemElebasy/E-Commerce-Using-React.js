import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload)
      state.cartCount = state.cartItems.length
    },
    removeFromCart: (state, action) => {
      const indexOfObject = state.cartItems.findIndex((object) => {
        return object.id === action.payload.id;
      });
      state.cartItems.splice(indexOfObject, 1);
      state.cartCount = state.cartItems.length
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;