import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vocabularyApi = createApi({
  reducerPath: "vocabularyApi",
  tagTypes: ["Vocabulary"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.npoint.io/3f1b02a0a0eb55db1011",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (build) => ({
    getVocabulary: build.query({
      query: ({ theme, letter }) => `/${theme}/${letter}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Vocabulary",
                id,
              })),
              { type: "Vocabulary", id: "LIST" },
            ]
          : [{ type: "Vocabulary", id: "LIST" }],
    }),
  }),
});

export const { useGetVocabularyQuery } = vocabularyApi;
