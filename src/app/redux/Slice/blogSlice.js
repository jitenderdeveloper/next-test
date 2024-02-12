import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_LINK = "https://api.cashdost.com/api"
export const blogSlice = createApi({
  reducerPath: "blogSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_LINK}` }),
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBlogQuery } = blogSlice;

export default blogSlice;
