import { URL_LINK } from "@/app/secure/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coupon = createApi({
  reducerPath: "coupon",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_LINK}` }),
  endpoints: (builder) => ({
    getCoupons: builder.query({
      query: () => ({
        url: "/coupons",
        method: "GET",
      }),
    }),

    getCouponsById: builder.query({
      query: (id) => ({
        url: `/coupons/${id}`,
        method: "GET",
      }),
    }),

    getSearchCoupon: builder.query({
      query: (q) => {
        console.log(q);
        return {
          url: `/coupons/search/q/${q}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetCouponsQuery,
  useGetCouponsByIdQuery,
  useGetSearchCouponQuery,
} = coupon;

export default coupon;
