// import React from 'react';

import TransferFilters from './TransferFilters/TransferFilters.jsx';
import AppIcon from './AppIcon/AppIcon.jsx';
import PriceFilters from './PriceFilters/PriceFilters.jsx';
import TicketCard from './TicketCard/TicketCard.jsx'
import ShowMoreButton from './ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

export default App;
