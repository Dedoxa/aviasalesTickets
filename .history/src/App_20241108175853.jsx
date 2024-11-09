import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { aviaTickets, useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';

const selectReceivedTickets = (id) => aviaTickets.endpoints.getTickets.select(id);

function App() {
  const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  const [triggerFetchData] = useLazyGetTicketsQuery();

  useEffect(() => {
    if (idData?.searchId) {
      triggerFetchData(idData.searchId); // запускаем второй запрос с полученным id
    }
  }, [idData, triggerFetchData]);

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

  const receivedTickets = useSelector(
    idData.searchId ? selectReceivedTickets(idData.searchId) : () => ({ data: null })
  );

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;
  if (!receivedTickets) return <h1>No data found</h1>;

  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          {receivedTickets?.tickets?.map((ticket) => (
            <TicketCard key={receivedTickets.tickets.indexOf(ticket)} data={ticket} />
          ))}
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
