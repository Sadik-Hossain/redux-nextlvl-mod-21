/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}
const initalState: IProduct = {
  status: false,
  priceRange: 150,
};
const productSlice = createSlice({
  name: 'product',
  initialState: initalState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

const productReducer = productSlice.reducer;
const productActions = productSlice.actions;

export { productActions };
export default productReducer;
