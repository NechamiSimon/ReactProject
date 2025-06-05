import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    loading: false,
    error: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsyncAction.pending, (state) => {
        state.loading = true;
        state.productsList = [];
        state.error = false;
      })
      .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
        state.productsList = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchDataAsyncAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});

export default productsSlice.reducer;
