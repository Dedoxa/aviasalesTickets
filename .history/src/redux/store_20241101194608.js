import { configureStore } from '@reduxjs/toolkit';

import * as actions from './actions';
import reducer from './reducers';

const store = configureStore({ reducer: reducer });
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.ALL);

export default store;
