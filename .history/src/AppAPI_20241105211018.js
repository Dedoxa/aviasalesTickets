import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const aviaTickets = createApi({
  reducerPath: 'aviaTickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
  endpoints: (build) => ({
    getPost: build.query({
      getTickets: 
    }),
  }),
});
