import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './reducers';

const store = configureStore({ reducer: generalReducer });

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

export default store;
