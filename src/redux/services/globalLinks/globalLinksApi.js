import { baseApi } from "@/redux/api/baseApi";

const globalLinksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllGlobalLinks: build.query({
      query: () => ({
        url: `/global-links/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return { results: response.data?.singleResult };
      },
      providesTags: ["global-links"],
    }),
    getSingleGlobalLink: build.query({
      query: (id) => ({
        url: `/global-links/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["global-links"],
    }),
    updateGlobalLink: build.mutation({
      query: (payload) => ({
        url: `/global-links/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["global-links"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllGlobalLinksQuery,
  useGetSingleGlobalLinkQuery,
  useUpdateGlobalLinkMutation,
} = globalLinksApi;
