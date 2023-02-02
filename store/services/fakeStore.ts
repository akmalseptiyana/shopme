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
  }),
});

export const {
  useGetProductsQuery,
  util: { getRunningQueriesThunk },
} = fakeStoreApi;

// export endpoints for use in SSR/SSG
export const { getProducts } = fakeStoreApi.endpoints;
