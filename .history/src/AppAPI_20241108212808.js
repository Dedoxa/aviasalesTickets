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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          let stop = false;
          let savedTickets = [];
          let RequestCount = 0;

          while (!stop) {
            const { data } = await queryFulfilled;
            stop = data.stop;
            console.log('data: ', data);
            savedTickets = [...savedTickets, ...data.tickets];
            dispatch({ type: 'UPDATE_TICKETS', ticketsArray: savedTickets });
            RequestCount++;
            if (stop) break;
            if (RequestCount === 21) break;

            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        } catch (error) {
          console.error('Ошибка при загрузке данных: ', error);
        }
      },
    }),
  }),
});

export const { useGetIDQuery } = aviaTickets;
export const { useLazyGetTicketsQuery } = aviaTickets;
