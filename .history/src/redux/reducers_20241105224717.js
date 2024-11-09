import { aviaTickets } from '../AppAPI';

import changeParticularTransferFilter from './supportFunctions';

const checkTransferFilters = (
  state = ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'],
  action
) => {
  switch (action.type) {
    case 'ALL':
      if (state.includes('ALL')) {
        return [];
      } else {
        return ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'];
      }
    case 'WITHOUT_TRANSFER':
      return changeParticularTransferFilter(state, 'WITHOUT_TRANSFER');
    case 'ONE_TRANSFER':
      return changeParticularTransferFilter(state, 'ONE_TRANSFER');
    case 'TWO_TRANSFERS':
      return changeParticularTransferFilter(state, 'TWO_TRANSFERS');
    case 'THREE_TRANSFERS':
      return changeParticularTransferFilter(state, 'THREE_TRANSFERS');
    default:
      return state;
  }
};

const checkPriceFilter = (state = 'CHEAPEST', action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return 'CHEAPEST';
    case 'FASTEST':
      return 'FASTEST';
    case 'OPTIMAL':
      return 'OPTIMAL';
    default:
      return state;
  }
};

const generalReducer = (state = {}, action) => {
  return Object.assign({}, state, {
    transferFilters: checkTransferFilters(state.transferFilters, action),
    priceFilter: checkPriceFilter(state.priceFilter, action),
    [aviaTickets.reducerPath]: aviaTickets.reducer,
  });
};

export default generalReducer;
