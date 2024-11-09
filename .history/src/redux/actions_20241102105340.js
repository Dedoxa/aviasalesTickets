export const ALL = { type: 'ALL' };
export const WITHOUT_TRANSFER = { type: 'WITHOUT_TRANSFER' };
export const ONE_TRANSFER = { type: 'ONE_TRANSFER' };
export const TWO_TRANSFERS = { type: 'TWO_TRANSFERS' };
export const THREE_TRANSFERS = { type: 'THREE_TRANSFERS' };
export const CHEAPEST = { type: 'CHEAPEST' };
export const FASTEST = { type: 'FASTEST' };
export const OPTIMAL = { type: 'OPTIMAL' };
//запрос билетов
export const FETCH_TICKETS_REQUEST = { type: 'FETCH_TICKETS_REQUEST' };
//запрос билетов
export const FETCH_TICKETS_FAILURE = { type: 'FETCH_TICKETS_FAILURE', error: 'Error happened' };
//запрос билетов
export const FETCH_TICKETS_SUCCESS = { type: 'FETCH_TICKETS_SUCCESS', response: {} };
