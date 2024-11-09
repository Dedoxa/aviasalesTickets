import * as actions from './actions';

const initialState = {
  transferFilter: 'ALL',
};

const { FASTEST } = actions;

const checkTransferFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return Object.assign({}, state, {
        transferFilter: 'ALL',
      });
    case 'WITHOUT_TRANSFER':
      return Object.assign({}, state, {
        transferFilter: 'WITHOUT_TRANSFER',
      });
    case 'ONE_TRANSFER':
      return Object.assign({}, state, {
        transferFilter: 'ONE_TRANSFER',
      });
    case 'TWO_TRANSFERS':
      return Object.assign({}, state, {
        transferFilter: 'TWO_TRANSFERS',
      });
    case 'THREE_TRANSFERS':
      return Object.assign({}, state, {
        transferFilter: 'THREE_TRANSFERS',
      });
    case 'CHEAPEST':
      return Object.assign({}, state, {
        transferFilter: 'CHEAPEST',
      });
    case 'FASTEST':
      return Object.assign({}, state, {
        transferFilter: 'FASTEST',
      });
    case 'OPTIMAL':
      return Object.assign({}, state, {
        transferFilter: 'OPTIMAL',
      });
    default:
      return state;
  }
};

let state = checkTransferFilter(initialState, FASTEST);
console.log(state);

export default checkTransferFilter;
