import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_LINK = "https://api.cashdost.com/api"
export const client = createApi({
  reducerPath: "client",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_LINK}` }),
  endpoints: (builder) => ({
    getClient: builder.query({
      query: () => ({
        url: "/store",
        method: "GET",
      }),
    }),

    getClientById: builder.query({
      query: (id) => ({
        url: `/store/${id}`,
        method: "GET",
      }),
    }),

    getClientSearchQuery: builder.query({
      query: (q) => {
        return {
          url: `/store/search/q/${q}`,
          method: "GET",
        };
      },
    }),

    allSearchCouponAndDeals: builder.query({
      query: (q) => {
        return {
          url: `/store/all/search/q/${q}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetClientQuery,
  useGetClientByIdQuery,
  useAllSearchCouponAndDealsQuery,
  useGetClientSearchQueryQuery,
} = client;

export default client;
