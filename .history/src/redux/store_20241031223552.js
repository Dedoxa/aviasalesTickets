import { configureStore } from '@reduxjs/toolkit';

import * as actions from './actions';
import checkFilter from './reducers';

const { OPTIMAL } = actions;

const store = configureStore({ reducer: checkFilter });

console.log(store.getState());
store.dispatch(OPTIMAL);
console.log(store.getState());
