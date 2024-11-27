import { baseApi } from "@/redux/api/baseApi";

const magazineApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addMagazine: build.mutation({
      query: (data) => {
        return {
          url: "/magazine/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["magazine"],
    }),
    getMagazines: build.query({
      query: ({ page = 1, limit = 5, search }) => ({
        url: `/magazine?page=${page}&limit=${limit}&searchText=${search}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          meta: response.data?.meta,
          results: response.data?.results,
        };
      },
      providesTags: ["magazine"],
    }),
    getAllMagazines: build.query({
      query: () => ({
        url: `/magazine/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return { results: response.data?.results };
      },
      providesTags: ["magazine"],
    }),
    getSingleMagazine: build.query({
      query: (id) => ({
        url: `/magazine/${id}/`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["magazine"],
    }),
    updateMagazine: build.mutation({
      query: (payload) => ({
        url: `/magazine/${payload.id}/`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["magazine"],
    }),
    deleteMagazine: build.mutation({
      query: (id) => ({
        url: `/magazine/${id}/`,
        method: "Delete",
        body: {},
      }),
      invalidatesTags: ["magazine"],
    }),
    deleteBulkMagazine: build.mutation({
      query: (payload) => {
        return {
          url: `/magazine/bulk-delete/`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["magazine"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddMagazineMutation,
  useGetMagazinesQuery,
  useGetAllMagazinesQuery,
  useGetSingleMagazineQuery,
  useUpdateMagazineMutation,
  useDeleteMagazineMutation,
  useDeleteBulkMagazineMutation,
} = magazineApi;
