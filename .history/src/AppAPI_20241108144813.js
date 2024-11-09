import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aviaTickets = createApi({
  reducerPath: 'aviaTickets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy' }),
  endpoints: (builder) => ({
    getID: builder.query({
      query: () => '/search',
    }),
    getTickets: builder.query({
      query: (id) => `/tickets?searchId=${id}`,
      async onQueryStarted (args, { dispatch, queryFulfilled, getState }) {
        try {
          let stop = false;
          whil (!stop) {
            const { data } = await queryFulfilled;
            stop = data.stop;
            const ticketsCount = data.tickets.length;
            console.log('ticketsCount: ', ticketsCount)
            if (stop) break;
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        } catch (error) {
          
        }
      }
    }),
  }),
});

export const { useGetIDQuery } = aviaTickets;
export const { useGetTicketsQuery } = aviaTickets;
