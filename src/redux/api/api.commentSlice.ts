import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { BASE_URL } from './api.ProductSlice';

export const apiTwo = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getProd: builder.query({
      query: () => `/pd`,
    }),
    getSingleProd: builder.query({
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
    updateProd: builder.mutation({
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
console.log('apiTwo~ :', apiTwo);
export const { useupdateProdMutation } = apiTwo;

// endpoints: (builder) => ({
//   postCom: builder.mutation({
//     query: ({ id, ...comment }) => {
//       return {
//         url: `/comments/${id}`,
//         method: 'POST',
//         body: comment,
//       };
//     },
//   }),
//   getCom: builder.query({
//     query: () => {
//       return {
//         url: `/comments`,
//         method: 'GET',
//       };
//     },
//   }),
// }),
