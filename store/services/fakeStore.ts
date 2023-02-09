import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const fakeStoreApi: any = createApi({
  reducerPath: "fakeStoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products" }),
    getProductsLimit: builder.query({
      query: (limit) => `/products?limit=${limit}`,
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsLimitQuery,
  useGetProductsByCategoryQuery,
  useGetProductDetailsQuery,
  util: { getRunningQueriesThunk },
} = fakeStoreApi;

// export endpoints for use in SSR/SSG
export const {
  getProducts,
  getProductsLimit,
  getProductsByCategory,
  getProductDetails,
} = fakeStoreApi.endpoints;
