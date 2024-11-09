import { configureStore } from '@reduxjs/toolkit';

import * as actions from './actions';
import checkFilter from './reducers';

const store = configureStore({ reducer: checkFilter });
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
