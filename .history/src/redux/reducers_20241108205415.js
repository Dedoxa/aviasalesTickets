import changeParticularTransferFilter from './supportFunctions';

export const checkTransferFilters = (
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

export const checkPriceFilter = (state = 'CHEAPEST', action) => {
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

export const changeRequestId = (state = null, action) => {
  switch (action.type) {
    case 'SET_ID':
      return action.newId;
    default:
      return state;
  }
};

export const updateTickets = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_TICKETS':
      return action.ticketsArray;
    default:
      return state;
  }
};
