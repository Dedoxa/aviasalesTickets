import { configureStore } from '@reduxjs/toolkit';

import { aviaTickets } from '../AppAPI';

import generalReducer from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

const store = configureStore({
  reducer: generalReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
