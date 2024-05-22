import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = import.meta.env.VITE_GIT_KEY;

export type RepositoryModel = {
  name: string;
  description: string;
  primaryLanguage: {
    name: string;
  };
  homepageUrl: string;
  url: string;
};

export type RepositoryData = {
  repository: RepositoryModel;
};

export type DataVal = {
  data: RepositoryData;
};

export const repositoryApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/graphql" }),
  reducerPath: "repositoryApi",
  tagTypes: ["Repository"],
  endpoints: (build) => ({
    getRepository: build.query<DataVal, { owner: string; name: string }>({
      query: ({ owner, name }) => ({
        url: "",
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        body: {
          query: `
            query GetRepository($owner: String!, $name: String!) {
              repository(owner: $owner, name: $name) {
                name
                description
                primaryLanguage {
                  name
                }
                homepageUrl
                url
              }
            }
          `,
          variables: { owner, name },
        },
      }),
      providesTags: (_, __, { owner, name }) => [
        { type: "Repository", id: `${owner}/${name}` },
      ],
    }),
  }),
});

export const { useGetRepositoryQuery } = repositoryApiSlice;
