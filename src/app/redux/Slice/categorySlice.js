import { URL_LINK } from "@/app/secure/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const category = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_LINK}` }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = category;

export default category;
