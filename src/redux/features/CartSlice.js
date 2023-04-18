import { createSlice } from "@reduxjs/toolkit";
import isCurrentItemInCart from "../../utils/isCurrentItemInCart";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length === 6) return;

      const { response, quantity } = isCurrentItemInCart(
        state.cart,
        action.payload.item
      );

      if (response) {
        state.cart = state.cart.map((cartItem) => {
          return cartItem.item.name === action.payload.item.name
            ? { ...cartItem, quantity: quantity + 1 }
            : cartItem;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const { response, quantity } = isCurrentItemInCart(
        state.cart,
        action.payload
      );

      if (quantity !== 1) {
        state.cart = state.cart.map((cartItem) => {
          return cartItem.item.name === action.payload.name
            ? { ...cartItem, quantity: quantity - 1 }
            : cartItem;
        });
      } else {
        state.cart = state.cart.filter((cartItem) => {
          return cartItem.item.name !== action.payload.name;
        });
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
