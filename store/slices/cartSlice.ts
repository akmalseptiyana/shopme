import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

import { withTax } from "@/lib/withTax";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  category: string;
  rating: { rate: number; count: number };
};

type State = {
  itemsList: Product[];
  totalQuantity: number;
  subTotals: number;
  totals: number;
};

const initialState: State = {
  itemsList: [],
  totalQuantity: 0,
  subTotals: 0,
  totals: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      // check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id,
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.subTotals += existingItem.price;
        state.totals = withTax(state.subTotals);
      } else {
        state.itemsList.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.subTotals += newItem.price;
        state.totals = state.subTotals;
      }

      state.totalQuantity++;

      Swal.fire({
        text: "Success Add To Cart",
        toast: true,
        position: "top-end",
        background: "#198754",
        color: "#fff",
        timer: 2000,
        showConfirmButton: false,
      });
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.subTotals += existingItem.price;
        state.totals = withTax(state.subTotals);
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.subTotals -= existingItem.price;
        state.totals = withTax(state.subTotals);
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const removedItem = state.itemsList.find((item) => item.id === id);

      if (removedItem) {
        if (state.itemsList.length > 0) {
          state.totalQuantity -= removedItem.quantity;
          state.subTotals -= removedItem.totalPrice;
          state.totals = withTax(state.subTotals);
        } else {
          state.totalQuantity = 0;
          state.subTotals = 0;
          state.totals = 0;
        }
      }

      state.itemsList = state.itemsList.filter((item) => item.id !== id);
    },
    resetCart(state, action) {
      state.itemsList = [];
      state.totalQuantity = 0;
      state.subTotals = 0;
      state.totals = 0;
    },
    calculateTax(state, action) {
      state.totals = withTax(state.subTotals);
    },
    resetTax(state, action) {
      state.totals = state.subTotals;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  resetCart,
  removeFromCart,
  calculateTax,
  resetTax,
} = cartSlice.actions;

export default cartSlice.reducer;
