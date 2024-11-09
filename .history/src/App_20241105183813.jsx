import { Provider } from 'react-redux';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import store from './redux/store.js';

import * as actions from '../../redux/actions';

function App() {
  const showTest = () => {
    store.dispatch(actions.TEST)
  }

  return (
    <Provider store={store}>
      <main className={classes.App}>
        <AppIcon />
        <button>console</button>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <ShowMoreButton />
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
