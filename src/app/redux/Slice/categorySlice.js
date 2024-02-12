import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_LINK = "https://api.cashdost.com/api"
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
