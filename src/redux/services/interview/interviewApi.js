import { baseApi } from "@/redux/api/baseApi";

const interviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addInterview: build.mutation({
      query: (data) => {
        return {
          url: "/interview/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["interview"],
    }),
    getInterviews: build.query({
      query: ({ page = 1, limit = 5, search }) => ({
        url: `/interview?page=${page}&limit=${limit}&searchText=${search}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          meta: response.data?.meta,
          results: response.data?.results,
        };
      },
      providesTags: ["interview"],
    }),
    getAllInterviews: build.query({
      query: () => ({
        url: `/interview/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return { results: response.data?.results };
      },
      providesTags: ["interview"],
    }),
    getSingleInterview: build.query({
      query: (id) => ({
        url: `/interview/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["interview"],
    }),
    getSingleInterviewBySlug: build.query({
      query: (slug) => ({
        url: `/interview/slug/${slug}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["interview"],
    }),
    updateInterview: build.mutation({
      query: (payload) => ({
        url: `/interview/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["interview"],
    }),
    deleteInterview: build.mutation({
      query: (id) => ({
        url: `/interview/${id}/`,
        method: "DELETE",
        body: {},
      }),
      invalidatesTags: ["interview"],
    }),
    deleteBulkInterview: build.mutation({
      query: (payload) => {
        return {
          url: `/interview/bulk-delete/`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["interview"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddInterviewMutation,
  useGetInterviewsQuery,
  useGetAllInterviewsQuery,
  useGetSingleInterviewQuery,
  useGetSingleInterviewBySlugQuery,
  useUpdateInterviewMutation,
  useDeleteInterviewMutation,
  useDeleteBulkInterviewMutation,
} = interviewApi;
