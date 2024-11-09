import { configureStore } from '@reduxjs/toolkit';

import * as actions from './actions';
import generalReducer from './reducers';

const store = configureStore({ reducer: generalReducer });

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.ALL);

export default store;
