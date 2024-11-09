import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const getTickets = createApi({
    reducerPath: 'aviaTickets',
    baseQuery: fetchBaseQuery({baseUrl: 'https://aviasales-test-api.kata.academy/'})
})