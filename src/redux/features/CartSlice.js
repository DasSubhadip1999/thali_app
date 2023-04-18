import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length > 5) return;
      state.cart.push(action.payload);
    },
    isCurrentItemInCart: (state, action) => {
      let currentItem;
      for (let item of state.cart) {
        if (item?.item.name === action.payload.name) {
          currentItem = item;
          return;
        }
      }
      return currentItem;
    },
  },
});

export const { addToCart, isCurrentItemInCart } = CartSlice.actions;
export default CartSlice.reducer;
