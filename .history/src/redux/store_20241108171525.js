import { configureStore } from '@reduxjs/toolkit';

import { aviaTickets } from '../AppAPI';

import { checkTransferFilters, checkPriceFilter } from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('State: ', store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    [aviaTickets.reducerPath]: aviaTickets.reducer,
    transferFilters: checkTransferFilters,
    priceFilter: checkPriceFilter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, aviaTickets.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviaTickets.middleware),
});

export const selectReceivedTickets = (id) => aviaTickets.endpoints.getTickets.select(id);

export default store;