import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_LINK = "https://api.cashdost.com/api"
export const product = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_LINK}` }),

  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),

    getProductById: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
    }),

    getQueryProduct: builder.query({
      query: (q) => ({
        url: `/product/search/q/${q}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  useGetQueryProductQuery,
} = product;
