// store.js
import { configureStore, createReducer } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default store;
