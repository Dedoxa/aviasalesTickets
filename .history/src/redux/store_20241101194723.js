import { configureStore } from '@reduxjs/toolkit';

import ALL from './actions';
import generalReducer from './reducers';

const store = configureStore({ reducer: generalReducer });

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(ALL);

export default store;
