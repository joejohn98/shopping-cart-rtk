import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        alert(`Product already added !!`);
      } else {
        state.push({
          id: uuidv4(),
          ...newProduct,
          quantity: 1,
        });
      }
    },

    // increase quantity
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.quantity++;
      }
    },
    // decrease quantity
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.find((product) => product.id === id);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },

    //remove from cart
    removeFromCart: (state, action) => {
      const newProduct = action.payload;
      return state.filter((product) => product.id !== newProduct.id);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
