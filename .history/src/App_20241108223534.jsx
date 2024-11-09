import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import uuid4 from 'uuid4';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { aviaTickets, useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';
import store from './redux/store.js';

const selectReceivedTickets = (requestId) => aviaTickets.endpoints.getTickets.select(requestId);

function App() {
  const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  const [triggerFetchData, result] = useLazyGetTicketsQuery();

  useEffect(() => {
    if (idData?.searchId) {
      store.dispatch({ type: 'SET_ID', newId: idData.searchId });
      triggerFetchData(idData.searchId);
    }
  }, [idData, triggerFetchData]);

  const requestsCount = useRef(0);

  useEffect(() => {
    console.log('STAAAAAAAAAAAAAP: ', result?.data?.stop);
    if (result?.data?.stop === false || requestsCount > 11000) {
      triggerFetchData(idData.searchId);
      store.dispatch({ type: 'UPDATE_TICKETS', ticketsArray: result.data.tickets });
      requestsCount++;
    }
  }, [result]);

  const requestId = store.getState().requestId;

  useSelector(requestId ? selectReceivedTickets(requestId) : () => ({ tickets: null }));
  const allTickets = store.getState().tickets;

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
          {allTickets?.tickets?.map((ticket) => (
            <TicketCard key={uuid4()} data={ticket} />
          ))}
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
