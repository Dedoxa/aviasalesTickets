// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './reducers';

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

// const store = configureStore({ generalReducer, composeEnhancers(applyMiddleware(loggedMiddleware, reduxThunk))});
const store = configureStore({
  reducer: generalReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
// const store = configureStore({ reducer: generalReducer });

export default store;
