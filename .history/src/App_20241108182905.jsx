import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
  const [triggerFetchData] = useLazyGetTicketsQuery();

  useEffect(() => {
    if (idData?.searchId) {
      store.dispatch({ type: 'SET_ID', newId: idData.searchId });
      triggerFetchData(idData.searchId); // запускаем второй запрос с полученным id
    }
  }, [idData, triggerFetchData]);

  const requestId = store.getState().requestId;

  // const id = idData?.searchId;

  // const {
  //   data: dataById,
  //   DataError,
  //   isLoading: isLoadingData,
  // } = useSelector(
  //   selectReceivedTickets(id, {
  //     skip: !id,
  //   })
  // );

  const receivedTickets = useSelector(requestId ? selectReceivedTickets(requestId) : () => ({ tickets: null }));
  console.log('heh: ', receivedTickets);

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;
  if (!receivedTickets.data.tickets) return <h1>No data found</h1>;

  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          {receivedTickets?.data?.tickets?.map((ticket) => (
            <TicketCard key={receivedTickets.data.tickets.indexOf(ticket)} data={ticket} />
          ))}
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
