import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import cartReducer from "@/store/slices/cartSlice";
import { fakeStoreApi } from "@/store/services/fakeStore";

const store = () =>
  configureStore({
    reducer: {
      [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(fakeStoreApi.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(store, { debug: true });
