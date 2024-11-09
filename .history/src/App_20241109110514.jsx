import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';
import store from './redux/store.js';
import sortTickets from './sortTicketsFunction.js';

function App() {
  const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  const [triggerFetchData, result] = useLazyGetTicketsQuery();
  // console.log('result: ', result.data);

  useEffect(() => {
    console.log('searchId: ', idData?.searchId);
    if (idData?.searchId && !store.getState().requestId) {
      store.dispatch({ type: 'SET_ID', newId: idData.searchId });
    }
  }, [idData]);

  useEffect(() => {
    if (store.getState().requestId && !result?.data?.stop) {
      triggerFetchData(store.getState().requestId);
    }
    if (result?.data?.stop === false) {
      console.log('stop: ', result?.data?.stop);
      triggerFetchData(store.getState().requestId);
      store.dispatch({ type: 'UPDATE_TICKETS', ticketsArray: result.data.tickets });
    }
    if (result?.data?.stop === true) {
      console.log('stop: ', result?.data?.stop);
    }
  }, [result, triggerFetchData]);

  const currentTickets = useSelector((state) => state.tickets);
  const currentTransferFilters = useSelector((state) => state.transferFilters);
  const currentPriceFilter = useSelector((state) => state.priceFilter);
  const currentRenderedTickets = useSelector((state) => state.renderedTickets);

  const sortedTickets = sortTickets(currentTickets, currentTransferFilters, currentPriceFilter, currentRenderedTickets);
  // console.log('currentTickets.length: ', currentTickets.length);
  // console.log('sortedTickets.length: ', sortedTickets.length);

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;

  if (sortedTickets.length > 0) {
    return (
      <main className={classes.App}>
        <AppIcon />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            {sortedTickets?.map((ticket) => (
              <TicketCard key={uuid4()} data={ticket} />
            ))}
            <ShowMoreButton />
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className={classes.App}>
        <AppIcon />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            <div className={classes['centeredOpenSansText']}>Рейсов, подходящих под заданные фильтры, не найдено.</div>
            <ShowMoreButton />
          </div>
        </div>
      </main>
    );
  }
}

export default App;