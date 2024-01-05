// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      newItem.quantity = 1
      state.items.push(newItem);
    },
    updateItemQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === itemId);
      if (itemToUpdate) {
        if (newQuantity <= 0) {
          // Remove the item from the cart if quantity is 0 or negative
          state.items = state.items.filter(item => item.id !== itemId);
        } else {
          itemToUpdate.quantity = newQuantity;
        }
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart,updateItemQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
