import { configureStore } from '@reduxjs/toolkit';

import { aviaTickets } from '../AppAPI';

import { checkTransferFilters, checkPriceFilter } from './reducers';

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   console.log('State: ', store.getState());
//   return result;
// };

const store = configureStore({
  reducer: {
    transferFilters: checkTransferFilters,
    priceFilter: checkPriceFilter,
    [aviaTickets.reducerPath]: aviaTickets.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviaTickets.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, aviaTickets.middleware),
});

export default store;
