import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './reducers';

const store = configureStore({ reducer: generalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()});

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

export default store;
