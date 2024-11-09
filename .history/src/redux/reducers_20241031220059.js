import * as actions from './actions';

const initialState = {
  transferFilter: 'ALL',
};

const checkFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return (state.transferFilters = 'ALL');
    case 'WITHOUT_TRANSFER':
      return (state.transferFilters = 'WITHOUT_TRANSFER');
    case 'ONE_TRANSFER':
      return (state.transferFilters = 'ONE_TRANSFER');
    case 'TWO_TRANSFER':
      return (state.transferFilters = 'TWO_TRANSFER');
    case 'THREE_TRANSFER':
      return (state.transferFilters = 'THREE_TRANSFER');
    case 'CHEAPEST':
      return (state.transferFilters = 'CHEAPEST');
    case 'FASTEST':
      return (state.transferFilters = 'FASTEST');
    case 'OPTIMAL':
      return (state.transferFilters = 'OPTIMAL');
  }
};

console.log('1')

console.log(checkFilter(initialState, actions));
