import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aviaTickets = createApi({
  reducerPath: 'aviaTickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (builder) => ({
    getID: builder.query({
      query: () => 'search',
    }),
    getTickets: builder.query({
      query: () => `tickets?searchId=${id}`,
    }),
  }),
});

export const { useGetIDQuery } = aviaTickets;
export const { useGetTicketsQuery } = aviaTickets;
