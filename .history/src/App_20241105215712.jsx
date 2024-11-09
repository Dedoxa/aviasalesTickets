import { Provider } from 'react-redux';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import store from './redux/store.js';
import { useGetTicketsQuery } from './AppAPI.js';

function App() {
  const { data = [], isLoading } = useGetTicketsQuery();
  if (isLoading) return <h1>Loading...</h1>;
  const generateId = () => {
    let startId = 0;
    () => {
      
    }
  }
  return (
    <Provider store={store}>
      <main className={classes.App}>
        <AppIcon />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            {data.map(ticket => (
            <TicketCard key={} />
            ))}
            <ShowMoreButton />
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
