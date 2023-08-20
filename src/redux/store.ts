import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';

import { apiTwo } from './api/api.commentSlice';
// import { apiOne } from './api/api.ProductSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    // [apiOne.reducerPath]: apiOne.reducer,
    [apiTwo.reducerPath]: apiTwo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTwo.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
