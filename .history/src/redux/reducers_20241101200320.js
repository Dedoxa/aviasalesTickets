const initialState = {
  transferFilters: ['ALL'],
  priceFilter: 'CHEAPEST',
};

const checkTransferFilters = (
  state = ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'],
  action
) => {
  switch (action.type) {
    case 'ALL':
      return Object.assign({}, state, {
        transferFilters: ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'],
      });
    case 'WITHOUT_TRANSFER':
      return {
        transferFilters: state.transferFilters.concat(['WITHOUT_TRANSFER']),
      };
    case 'ONE_TRANSFER':
      return {
        transferFilters: state.transferFilters.concat(['ONE_TRANSFER']),
      };
    case 'TWO_TRANSFERS':
      return {
        transferFilters: state.transferFilters.concat(['TWO_TRANSFERS']),
      };
    case 'THREE_TRANSFERS':
      return {
        transferFilters: state.transferFilters.concat(['THREE_TRANSFERS']),
      };
    default:
      return state;
  }
};

const checkPriceFilter = (state = 'CHEAPEST', action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return {
        priceFilter: 'CHEAPEST',
      };
    case 'FASTEST':
      return {
        priceFilter: 'FASTEST',
      };
    case 'OPTIMAL':
      return {
        priceFilter: 'OPTIMAL',
      };
    default:
      return state;
  }
};

const generalReducer = (state = initialState, action) => {
  return Object.assign({}, state, {
    transferFilters: checkTransferFilters(state.transferFilters, action),
    priceFilter: checkPriceFilter(state.priceFilter, action),
  });
};

export default generalReducer;

// Object.assign({}, state, {
//   transferFilters: ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'],
// });
