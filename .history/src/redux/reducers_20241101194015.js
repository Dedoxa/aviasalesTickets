const initialState = {
  transferFilters: ['ALL'],
  priceFilter: 'CHEAPEST',
};

const checkFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return Object.assign({}, state, {
        transferFilters: ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'],
      });
    case 'WITHOUT_TRANSFER':
      return Object.assign({}, state, {
        transferFilters: state.transferFilters.concat(['WITHOUT_TRANSFER']),
      });
    case 'ONE_TRANSFER':
      return Object.assign({}, state, {
        transferFilters: state.transferFilters.concat(['ONE_TRANSFER']),
      });
    case 'TWO_TRANSFERS':
      return Object.assign({}, state, {
        transferFilters: state.transferFilters.concat(['TWO_TRANSFERS']),
      });
    case 'THREE_TRANSFERS':
      return Object.assign({}, state, {
        transferFilters: state.transferFilters.concat(['THREE_TRANSFERS']),
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

export default checkFilter;
