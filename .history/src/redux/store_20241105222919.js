import { configureStore } from '@reduxjs/toolkit';

import { aviaTickets } from '../AppAPI';

import generalReducer from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

const store = configureStore({
  // reducer: generalReducer,
  [aviaTickets.reducerPath]: aviaTickets.reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, aviaTickets.middleware),
});

export default store;
