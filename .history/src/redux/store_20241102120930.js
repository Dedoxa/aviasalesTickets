import { compose } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

// const store = configureStore({ generalReducer, composeEnhancers(applyMiddleware(loggedMiddleware, reduxThunk)) });

const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log()
}

const store = configureStore({ generalReducer });

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

export default store;
