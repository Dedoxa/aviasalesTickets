import { configureStore } from '@reduxjs/toolkit';

import { aviaTickets } from '../AppAPI';

import {
  checkTransferFilters,
  checkPriceFilter,
  showMoreTickets,
  checkFetching,
  changeRequestId,
  updateTickets,
} from './reducers';

const store = configureStore({
  reducer: {
    [aviaTickets.reducerPath]: aviaTickets.reducer,
    transferFilters: checkTransferFilters,
    priceFilter: checkPriceFilter,
    renderedTickets: showMoreTickets,
    isFetching: checkFetching,
    requestId: changeRequestId,
    tickets: updateTickets,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviaTickets.middleware),
});

export default store;
