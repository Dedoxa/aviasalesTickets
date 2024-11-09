import { configureStore } from '@reduxjs/toolkit';

import * as actions from './actions';
import checkFilter from './reducers';

const store = configureStore({ reducer: checkFilter });

console.log(store.getState());
