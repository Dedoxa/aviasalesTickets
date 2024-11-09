import * as actions from './actions';

const initialState = {
  transferFilter: 'ALL',
  priceFilter: 'CHEAPEST',
};

const checkFilter = (state = initialState, action) => {
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
        priceFilter: 'CHEAPEST',
      });
    case 'FASTEST':
      return Object.assign({}, state, {
        priceFilter: 'FASTEST',
      });
    case 'OPTIMAL':
      return Object.assign({}, state, {
        priceFilter: 'OPTIMAL',
      });
    default:
      return state;
  }
};

let state = checkFilter(initialState, {});
console.log(state);

export default checkFilter;
