import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredClients: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_PRODUCTS(state, action) {
      const { products, search } = action.payload;
      const tempProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredClients = tempProducts;
    },
  },
});

export const { FILTER_PRODUCTS } = filterSlice.actions;

export const selectFilteredPoducts = (state) => state.filter.filteredClients;

export default filterSlice.reducer;
