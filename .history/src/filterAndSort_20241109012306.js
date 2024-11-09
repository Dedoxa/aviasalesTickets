import store from './redux/store';

const sortTickets = (transferFilters, priceFilter, amount) => {
  const allTickets = store.getState().tickets;

  let transferFilteredTickets = [...allTickets];
  if (!transferFilters.includes('ALL')) {
    if (!transferFilters.includes('WITHOUT_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length > 0 || ticket.segments[1].stops.length > 0
      );
    }
    if (!transferFilters.includes('ONE_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => (ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length > 1)
        || (ticket.segments[1].stops.length === 0 || ticket.segments[1].stops.length > 1)
      );
    }
    if (!transferFilters.includes('TWO_TRANSFERS')) {
    }
    if (!transferFilters.includes('THREE_TRANSFERS')) {
    }
  }

  const priceFilteredTickets = transferFilteredTickets.sort(function (a, b) {
    const aDuration = a.segments[0].duration + a.segments[1].duration;
    const bDuration = b.segments[0].duration + b.segments[1].duration;
    const aOptimal = aDuration + a.price;
    const bOptimal = bDuration + b.price;
    switch (priceFilter) {
      case 'САМЫЙ ДЕШЁВЫЙ':
        return a.price - b.price;
      case 'САМЫЙ БЫСТРЫЙ':
        return aDuration - bDuration;
      case 'ОПТИМАЛЬНЫЙ':
        return aOptimal - bOptimal;
    }
  });

  return priceFilteredTickets.filter((ticket) => priceFilteredTickets.findIndex(ticket) < amount - 1);
};

export default sortTickets;
