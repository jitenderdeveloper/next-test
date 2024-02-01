"use client";
import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./Slice/blogSlice";
import banner from "./Slice/bannerSlice";
import category from "./Slice/categorySlice";
import { product } from "./Slice/productSlice";
import client from "./Slice/clientSlice";
import coupon from "./Slice/couponSlice";

export const store = configureStore({
  reducer: {
    [blogSlice.reducerPath]: blogSlice.reducer,
    [banner.reducerPath]: banner.reducer,
    [category.reducerPath]: category.reducer,
    [product.reducerPath]: product.reducer,
    [client.reducerPath]: client.reducer,
    [coupon.reducerPath]: coupon.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      blogSlice.middleware,
      banner.middleware,
      category.middleware,
      product.middleware,
      client.middleware,
      coupon.middleware,
    ]),
});

export default store;
