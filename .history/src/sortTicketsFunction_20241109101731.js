const sortTickets = (originalArray, transferFilters, priceFilter, amount) => {
  // ---------жёсткая сортировка-----------
  // if (transferFilters.length === 0) return [];
  // if (!transferFilters.includes('ALL')) {
  //   if (!transferFilters.includes('WITHOUT_TRANSFER')) {
  //     transferFilteredTickets = transferFilteredTickets.filter(
  //       (ticket) => ticket.segments[0].stops.length > 0 && ticket.segments[1].stops.length > 0
  //     );
  //   }
  //   if (!transferFilters.includes('ONE_TRANSFER')) {
  //     transferFilteredTickets = transferFilteredTickets.filter(
  //       (ticket) =>
  //         ticket.segments[0].stops.length < 1 &&
  //         ticket.segments[0].stops.length > 1 &&
  //         ticket.segments[1].stops.length < 1 &&
  //         ticket.segments[1].stops.length > 1
  //     );
  //   }
  //   if (!transferFilters.includes('TWO_TRANSFERS')) {
  //     transferFilteredTickets = transferFilteredTickets.filter(
  //       (ticket) =>
  //         ticket.segments[0].stops.length < 2 &&
  //         ticket.segments[0].stops.length > 2 &&
  //         ticket.segments[1].stops.length < 2 &&
  //         ticket.segments[1].stops.length > 2
  //     );
  //   }
  //   if (!transferFilters.includes('THREE_TRANSFERS')) {
  //     transferFilteredTickets = transferFilteredTickets.filter(
  //       (ticket) => ticket.segments[0].stops.length < 3 //&& ticket.segments[1].stops.length < 3
  //     );
  //   }
  // }
  //---------------------------------

  let transferFilteredTickets = [...originalArray];
  console.log('transferFilters: ', transferFilters);
  if (transferFilters.length === 0) return [];
  if (!transferFilters.includes('ALL')) {
    if (!transferFilters.includes('THREE_TRANSFERS')) {
      transferFilteredTickets = transferFilteredTickets.filter((ticket) => ticket.segments[0].stops.length < 3);
    }
    if (!transferFilters.includes('TWO_TRANSFERS')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length !== 2
      );
    }
    if (!transferFilters.includes('ONE_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length !== 1
      );
    }
    if (!transferFilters.includes('WITHOUT_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter((ticket) => ticket.segments[0].stops.length > 0);
    }
  }

  const prePriceFilteredTickets = [...transferFilteredTickets];
  const priceFilteredTickets = prePriceFilteredTickets.sort(function (a, b) {
    const aDuration = a.segments[0].duration + a.segments[1].duration;
    const bDuration = b.segments[0].duration + b.segments[1].duration;
    const aOptimal = aDuration + a.price;
    const bOptimal = bDuration + b.price;

    switch (priceFilter) {
      case 'CHEAPEST':
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      case 'FASTEST':
        if (aDuration > bDuration) return 1;
        if (aDuration < bDuration) return -1;
        return 0;
      case 'OPTIMAL':
        if (aOptimal > bOptimal) return 1;
        if (aOptimal < bOptimal) return -1;
        return 0;
    }
  });

  return priceFilteredTickets.filter((ticket, index) => index < amount);
};

export default sortTickets;
