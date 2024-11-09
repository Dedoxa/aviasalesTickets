import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';
import { selectReceivedTickets } from './redux/store.js';

function App() {
  const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  const [triggerFetchData, { data: dataById, error: DataError, isLoading: isLoadingData }] = useLazyGetTicketsQuery();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (idData?.id) {
      setId(idData.id); // сохраняем id для использования в селекторе
      triggerFetchData(idData.id); // запускаем второй запрос с полученным id
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

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (DataError) {
    console.error('Error fetching data: ', DataError);
    return <h1>Error fetching data.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;
  if (isLoadingData) return <h1>Loading Data...</h1>;
  if (!dataById) return <h1>No data found</h1>;

  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          {dataById?.tickets?.map((ticket) => (
            <TicketCard key={dataById.tickets.indexOf(ticket)} data={ticket} />
          ))}
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;