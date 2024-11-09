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
            console.log('stop: ', stop);
            savedTickets = [...savedTickets, ...data.tickets];
            dispatch(
              aviaTickets.util.updateQueryData('getTickets', undefined, (draft) => {
                draft.aviaTickets = savedTickets;
              })
            );
            // const ticketsCount = savedTickets.length;
            // console.log('ticketsCount: ', ticketsCount);
            RequestCount++;
            if (stop) break;
            if (RequestCount === 21) break;

            // await new Promise((resolve) => setTimeout(resolve, 100));
          }
        } catch (error) {
          console.error('Ошибка при загрузке данных: ', error);
        }
      },
      transformResponse: (response) => ({
        tickets: response.tickets,
      }),
      providesTags: ['UserData'],
    }),
  }),
});

export const { useGetIDQuery } = aviaTickets;
export const { useLazyGetTicketsQuery } = aviaTickets;
