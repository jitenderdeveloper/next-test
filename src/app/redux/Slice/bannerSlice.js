import { URL_LINK } from "@/app/secure/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const banner = createApi({
  reducerPath: "banner",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_LINK}` }),
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: "/banner",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBannerQuery } = banner;

export default banner;
