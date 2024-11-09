import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aviaTickets = createApi({
  reducerPath: 'aviaTickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (builder) => ({
    getID: builder.query({
      query: () => 'tickets?searchId=2fb646221415b1b75d1df1a3c38d45b3',
    }),
    getTickets: builder.query({
      query: () => 'tickets?searchId=2fb646221415b1b75d1df1a3c38d45b3',
    }),
  }),
});

export const { useGetTicketsQuery } = aviaTickets;
