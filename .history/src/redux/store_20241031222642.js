import { configureStore } from 'redux';

import * as actions from './actions';
import checkFilter from './reducers';

const store = configureStore(checkFilter)