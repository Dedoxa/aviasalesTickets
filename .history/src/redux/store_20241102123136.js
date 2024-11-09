// import { configureStore } from '@reduxjs/toolkit';
import { compose, configureStore } from '@reduxjs/toolkit';

import generalReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

//ПОКА НЕ РАБОТАЕТ МИДЛВАР-ЛОГГЕР
// const store = configureStore({ generalReducer, composeEnhancers(applyMiddleware(loggedMiddleware, reduxThunk))});
const store = configureStore({ reducer: generalReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });
// const store = configureStore({ reducer: generalReducer });

export default store;
