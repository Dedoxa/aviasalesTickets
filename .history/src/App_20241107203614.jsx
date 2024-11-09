import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useGetTicketsQuery } from './AppAPI.js';

function App() {
  const { data: idData, isLoading: isLoadingID } = useGetIDQuery();
  const id = idData?.id;

  const { data: dataById, isLoading: isLoadingData } = useGetTicketsQuery(id, {
    skip: !id,
  });

  if (isLoadingID || isLoadingData) return <h1>Loading...</h1>;
  if (!isLoadingData) return <h1>No data found</h1>;

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
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;