const sortTickets = (originalArray, transferFilters, priceFilter, amount) => {
  let transferFilteredTickets = [...originalArray];
  // console.log('длина оригинального массива: ', originalArray.length);
  // console.log('фильтры пересадок: ', transferFilters);
  // console.log('табовый фильтр: ', priceFilter);
  // console.log('кол-во билетов на экране: ', amount);
  // console.log('1transferFilteredTickets: ', transferFilteredTickets);

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

  if (transferFilters.length === 0) return [];
  if (!transferFilters.includes('ALL')) {
    if (!transferFilters.includes('WITHOUT_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter((ticket) => ticket.segments[0].stops.length > 0);
    }
    if (!transferFilters.includes('ONE_TRANSFER')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length < 1 && ticket.segments[0].stops.length > 1
      );
    }
    if (!transferFilters.includes('TWO_TRANSFERS')) {
      transferFilteredTickets = transferFilteredTickets.filter(
        (ticket) => ticket.segments[0].stops.length < 2 && ticket.segments[0].stops.length > 2
      );
    }
    if (!transferFilters.includes('THREE_TRANSFERS')) {
      transferFilteredTickets = transferFilteredTickets.filter((ticket) => ticket.segments[0].stops.length < 3);
    }
  }
  console.log('transferFilteredTickets[0]: ', transferFilteredTickets[0]);

  //---------------------------------простая сортировка
  // const prePriceFilteredTickets = [...transferFilteredTickets];
  // const priceFilteredTickets = prePriceFilteredTickets.sort((a, b) => a.price - b.price);

  //---------------------------------сложная сортировка
  // const prePriceFilteredTickets = [...transferFilteredTickets];
  // const mappedPrePriceFilteredTickets = prePriceFilteredTickets.map((ticket, i) => {
  //   return {
  //     index: i,
  //     price: ticket.price,
  //     duration: ticket.segments[0].duration + ticket.segments[1].duration,
  //     optimal: ticket.segments[0].duration + ticket.segments[1].duration + ticket.price,
  //   };
  // });

  // let priceFilteredTickets;
  // if (priceFilter === 'САМЫЙ ДЕШЁВЫЙ') {
  //   mappedPrePriceFilteredTickets.sort((a, b) => {
  //     if (a.price > b.price) return 1;
  //     if (a.price < b.price) return -1;
  //     return 0;
  //   });

  //   priceFilteredTickets = mappedPrePriceFilteredTickets.map((el) => {
  //     return prePriceFilteredTickets[el.index];
  //   });
  // }
  // if (priceFilter === 'САМЫЙ БЫСТРЫЙ') {
  //   mappedPrePriceFilteredTickets.sort((a, b) => {
  //     if (a.duration > b.duration) return 1;
  //     if (a.duration < b.duration) return -1;
  //     return 0;
  //   });

  //   priceFilteredTickets = mappedPrePriceFilteredTickets.map((el) => {
  //     return prePriceFilteredTickets[el.index];
  //   });
  // }
  // if (priceFilter === 'ОПТИМАЛЬНЫЙ') {
  //   mappedPrePriceFilteredTickets.sort((a, b) => {
  //     if (a.optimal > b.optimal) return 1;
  //     if (a.optimal < b.optimal) return -1;
  //     return 0;
  //   });

  //   priceFilteredTickets = mappedPrePriceFilteredTickets.map((el) => {
  //     return prePriceFilteredTickets[el.index];
  //   });
  // }

  const prePriceFilteredTickets = [...transferFilteredTickets];
  console.log('prePriceFilteredTickets[1]: ', prePriceFilteredTickets[1]);
  console.log('priceFilter === САМЫЙ ДЕШЁВЫЙ ? ', priceFilter === 'САМЫЙ ДЕШЁВЫЙ');
  const priceFilteredTickets = prePriceFilteredTickets.sort(function (a, b) {
    const aDuration = a.segments[0].duration + a.segments[1].duration;
    const bDuration = b.segments[0].duration + b.segments[1].duration;
    const aOptimal = aDuration + a.price;
    const bOptimal = bDuration + b.price;
    // if (priceFilter === 'САМЫЙ ДЕШЁВЫЙ') {
    //   console.log('ВОШЁЛ В СОРТИРОВКУ ПО ТАБАМ (ДЕШЁВЫЙ)!');
    //   if (a.price > b.price) return 1;
    //   if (a.price < b.price) return -1;
    //   return 0;
    // }
    // if (priceFilter === 'САМЫЙ БЫСТРЫЙ') {
    //   console.log('ВОШЁЛ В СОРТИРОВКУ ПО ТАБАМ (БЫСТРЫЙ)!');
    //   if (aDuration > bDuration) return 1;
    //   if (aDuration < bDuration) return -1;
    //   return 0;
    // }
    // if (priceFilter === 'ОПТИМАЛЬНЫЙ') {
    //   console.log('ВОШЁЛ В СОРТИРОВКУ ПО ТАБАМ (ОПТИМАЛЬНЫЙ)!');
    //   if (aOptimal > bOptimal) return 1;
    //   if (aOptimal < bOptimal) return -1;
    //   return 0;
    // }

    switch (priceFilter) {
      case 'CHEAPEST':
        console.log('ВОШЁЛ В СОРТИРОВКУ ПО ТАБАМ (ДЕШЁВЫЙ)!');
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      case 'FASTEST':
        console.log('ВОШЁЛ В СОРТИРОВКУ ПО ТАБАМ (БЫСТРЫЙ)!');
        if (aDuration > bDuration) return 1;
        if (aDuration < bDuration) return -1;
        return 0;
      case 'OPTIMAL':
        console.log('ВОШЁЛ В СОРТИРОВКУ ПО ТАБАМ (ОПТИМАЛЬНЫЙ)!');
        if (aOptimal > bOptimal) return 1;
        if (aOptimal < bOptimal) return -1;
        return 0;
    }

    // switch (priceFilter) {
    //   case 'САМЫЙ ДЕШЁВЫЙ':
    //     return a.price - b.price;
    //   case 'САМЫЙ БЫСТРЫЙ':
    //     return aDuration - bDuration;
    //   case 'ОПТИМАЛЬНЫЙ':
    //     return aOptimal - bOptimal;
    // }
  });
  console.log('priceFilteredTickets[1]!!!: ', priceFilteredTickets[1]);

  const slicedTickets = priceFilteredTickets.filter((ticket, index) => index < amount);

  return slicedTickets;
};

export default sortTickets;
