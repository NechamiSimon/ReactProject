
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectorProduct: [],
    totalSum: 0,
    count: 0,
    sumWhithSend: 50,
    isDeliveryChecked: false,
  },
  reducers: {
    addToSelector: (state, action) => {
      let productExists = false;

      state.selectorProduct.map(p => {
        if (p.title === action.payload.title) {
          p.sum++;
          state.totalSum += p.price;
          state.count++;
          productExists = true;
        }
      });

      if (!productExists) {
        state.selectorProduct.push({
          id: Date.now(),
          image: action.payload.image,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          sum: 1,
        });
        state.count++;
        state.totalSum += action.payload.price;
      }

      alert("One item added to cart");
    },

    add: (state, action) => {
      state.count = state.count + 1;
      state.selectorProduct.map(p => {
        if (p.title === action.payload) {
          p.sum += 1;
          state.totalSum += p.price;
        }
      });
    },
    sub: (state, action) => {
      state.selectorProduct.map(p => {
        if (p.title === action.payload && p.sum > 1) {
          p.sum = p.sum - 1;
          state.count = state.count - 1;
          state.totalSum -= p.price;
        }
      });
    },

    removeFromSelector: (state, action) => {
      state.selectorProduct.map(p => {
        if (p.title === action.payload) {
          state.count = state.count - p.sum;
          state.totalSum -= p.price * p.sum;
        }
      });
      state.selectorProduct = state.selectorProduct.filter(p => p.title !== action.payload);
      if (state.selectorProduct.length == 0) {
        state.totalSum = 0
      }
    },
    addSend: (state) => {
      state.totalSum += state.sumWhithSend
    },
    removeSend: (state) => {
      state.totalSum -= 50;
    },
    clearProducts: (state) => {
      state.selectorProduct = [];
      state.totalSum = 0;
      state.count = 0;
      state.isDeliveryChecked = false;
    },
    toggleDelivery: (state) => {
      state.isDeliveryChecked = !state.isDeliveryChecked;
    },
  },
});

export const { addToSelector, removeFromSelector, add, sub, addSend, clearProducts, toggleDelivery, removeSend } = cartSlice.actions;

export default cartSlice.reducer;