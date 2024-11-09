import { useEffect, useRef } from 'react';
import uuid4 from 'uuid4';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';
import store from './redux/store.js';

function App() {
  const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  const [triggerFetchData, result] = useLazyGetTicketsQuery();
  console.log('result: ', result.data);

  useEffect(() => {
    if (idData?.searchId && !store.getState().requestId) {
      store.dispatch({ type: 'SET_ID', newId: idData.searchId });
      // console.log('searchId: ', idData.searchId);
      triggerFetchData(idData.searchId);

      // fetchTickets(idData.searchId);
    }
  }, [idData, triggerFetchData]);

  const requestsCount = useRef(0);

  useEffect(() => {
    // console.log('stop: ', result?.data?.stop);
    if (result?.data?.stop === false && requestsCount.current < 5) {
      triggerFetchData(store.getState().requestId);
      store.dispatch({ type: 'UPDATE_TICKETS', ticketsArray: result.data.tickets });
      requestsCount.current++;
    }
  }, [result, triggerFetchData]);

  const sortTickets = (transferFilters, priceFilter, amount) => {
    const allTickets = store.getState().tickets;

    const transferFilteredTickets = 

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

    const slicedTickets = priceFilteredTickets;
  };

  const sortedTickets = store.getState().tickets;
  console.log(sortedTickets.length);

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;

  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          {sortedTickets?.tickets?.map((ticket) => (
            <TicketCard key={uuid4()} data={ticket} />
          ))}
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
