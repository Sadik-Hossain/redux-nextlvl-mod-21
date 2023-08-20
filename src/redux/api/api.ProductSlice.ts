import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = { baseUrl: 'http://localhost:5000/api' };
export const apiOne = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery(BASE_URL),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/pd`,
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/pd/${id}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
          },
        };
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...product }) => {
        return {
          url: `/pd/${id}`,
          method: 'PUT',
          body: product,
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
          },
        };
      },
    }),
    updateProduct2: builder.mutation({
      query: ({ id, ...product }) => {
        return {
          url: `/pd/${id}`,
          method: 'PUT',
          body: product,
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
          },
        };
      },
    }),
  }),
});
console.log('apiOne~: ', apiOne);
export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = apiOne;
