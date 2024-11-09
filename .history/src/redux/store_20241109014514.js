import { configureStore } from '@reduxjs/toolkit';

import { aviaTickets } from '../AppAPI';

import { checkTransferFilters, checkPriceFilter, showMoreTickets, changeRequestId, updateTickets } from './reducers';

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   console.log('State: ', store.getState());
//   return result;
// };

const store = configureStore({
  reducer: {
    [aviaTickets.reducerPath]: aviaTickets.reducer,
    transferFilters: checkTransferFilters,
    priceFilter: checkPriceFilter,
    renderedTickets: showMoreTickets,
    requestId: changeRequestId,
    tickets: updateTickets,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, aviaTickets.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviaTickets.middleware),
});

export default store;
