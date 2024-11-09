import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useGetTicketsQuery } from './AppAPI.js';

function App() {
  const { data: idData, IDError, isLoading: isLoadingID } = useGetIDQuery();

  const id = idData?.id;
  console.log('id: ', id);

  const { data: dataById, DataError, isLoading: isLoadingData } = useGetTicketsQuery(id, {
    skip: !id,
  });

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (DataError) {
    console.error('Error fetching data: ', DataError);
    return <h1>Error fetching data.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;
  if (!id) return <h1>No ID found</h1>;
  if (isLoadingData) return <h1>Loading Data...</h1>;
  if (!dataById) return <h1>No data found</h1>;

  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          {/* {data.map((ticket) => (
            <TicketCard key={data.indexOf(ticket)} />
          ))} */}
          <h1>Data for ID: {id}</h1>
          <p>{JSON.stringify(dataById)}</p>
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
