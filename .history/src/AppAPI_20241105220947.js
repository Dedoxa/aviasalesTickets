import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const aviaTickets = createApi({
  reducerPath: 'aviaTickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (build) => ({
    getTickets: build.query({
      query: () => 'tickets?searchId=2fb646221415b1b75d1df1a3c38d45b3',
    }),
  }),
});

export const { use }
