import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const aviaTickets = createApi({
  reducerPath: 'aviaTickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (build) => ({
    getTickets: build.query({
      query:  
    }),
  }),
});
