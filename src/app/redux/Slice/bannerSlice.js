import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_LINK = "https://api.cashdost.com/api"
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
