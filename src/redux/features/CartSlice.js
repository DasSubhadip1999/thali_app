import { createSlice } from "@reduxjs/toolkit";
import isCurrentItemInCart from "../../utils/isCurrentItemInCart";

const initialState = {
  cart: [],
  customer: null,
  order: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { response, quantity } = isCurrentItemInCart(
        state.cart,
        action.payload.item
      );

      if (state.cart.length === 6 && !response) return;

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
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
    removeCustomer: (state, action) => {
      state.customer = null;
    },

    createOrder: (state, action) => {
      state.order = {
        cart: state.cart,
        customer: state.customer,
      };

      state.cart = [];
      state.customer = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addCustomer,
  removeCustomer,
  createOrder,
} = CartSlice.actions;
export default CartSlice.reducer;
