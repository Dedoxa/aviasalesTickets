const sortTickets = (originalArray, transferFilters, priceFilter, amount) => {
  let transferFilteredTickets = [...originalArray];
  // console.log('1transferFilteredTickets: ', transferFilteredTickets);

  if (transferFilters.length === 0) return [];
  if (!transferFilters.includes('ALL')) {
    if (!transferFilters.includes('WITHOUT_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length > 0 && ticket.segments[1].stops.length > 0
      );
    }
    if (!transferFilters.includes('ONE_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) =>
          ticket.segments[0].stops.length < 1 &&
          ticket.segments[0].stops.length > 1 &&
          ticket.segments[1].stops.length < 1 &&
          ticket.segments[1].stops.length > 1
      );
    }
    if (!transferFilters.includes('TWO_TRANSFERS')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) =>
          ticket.segments[0].stops.length < 2 &&
          ticket.segments[0].stops.length > 2 &&
          ticket.segments[1].stops.length < 2 &&
          ticket.segments[1].stops.length > 2
      );
    }
    if (!transferFilters.includes('THREE_TRANSFERS')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length < 3 && ticket.segments[1].stops.length < 3
      );
    }
  }
  // console.log('transferFilteredTickets: ', transferFilteredTickets);

  let priceFilteredTickets;
  if (priceFilter === 'САМЫЙ ДЕШЁВЫЙ') {
    priceFilteredTickets = transferFilteredTickets.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (priceFilter === 'САМЫЙ БЫСТРЫЙ') {
    priceFilteredTickets = transferFilteredTickets.sort(function (a, b) {
      const aDuration = a.segments[0].duration + a.segments[1].duration;
      const bDuration = b.segments[0].duration + b.segments[1].duration;
      return aDuration - bDuration;
    });
  }
  if (priceFilter === 'ОПТИМАЛЬНЫЙ') {
    priceFilteredTickets = transferFilteredTickets.sort(function (a, b) {
      const aDuration = a.segments[0].duration + a.segments[1].duration;
      const bDuration = b.segments[0].duration + b.segments[1].duration;
      const aOptimal = aDuration + a.price;
      const bOptimal = bDuration + b.price;
      return aOptimal - bOptimal;
    });
  }
  // console.log('priceFilteredTickets: ', priceFilteredTickets);

  // const priceFilteredTickets = transferFilteredTickets.sort(function (a, b) {
  //   const aDuration = a.segments[0].duration + a.segments[1].duration;
  //   const bDuration = b.segments[0].duration + b.segments[1].duration;
  //   const aOptimal = aDuration + a.price;
  //   const bOptimal = bDuration + b.price;
  //   switch (priceFilter) {
  //     case 'САМЫЙ ДЕШЁВЫЙ':
  //       return a.price - b.price;
  //     case 'САМЫЙ БЫСТРЫЙ':
  //       return aDuration - bDuration;
  //     case 'ОПТИМАЛЬНЫЙ':
  //       return aOptimal - bOptimal;
  //   }
  // });

  const slicedTickets = priceFilteredTickets.filter((ticket, index) => index < amount);

  return slicedTickets;
};

export default sortTickets;
