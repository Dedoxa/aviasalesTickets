import * as actions from './actions';

const initialState = {
  transferFilter: 'ALL',
};

const { FASTEST } = actions;

const checkTransferFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return (state.transferFilter = 'ALL');
    case 'WITHOUT_TRANSFER':
      return (state.transferFilter = 'WITHOUT_TRANSFER');
    case 'ONE_TRANSFER':
      return (state.transferFilter = 'ONE_TRANSFER');
    case 'TWO_TRANSFER':
      return (state.transferFilter = 'TWO_TRANSFER');
    case 'THREE_TRANSFER':
      return (state.transferFilter = 'THREE_TRANSFER');
    case 'CHEAPEST':
      return (state.transferFilter = 'CHEAPEST');
    case 'FASTEST':
      return Object.assign({}, state, );
    case 'OPTIMAL':
      return (state.transferFilter = 'OPTIMAL');
    default:
      return state;
  }
};

let state = checkTransferFilter(initialState, FASTEST);
console.log(state);

export default checkTransferFilter;
