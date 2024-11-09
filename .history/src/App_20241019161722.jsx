// import React from 'react';

import TransferFilters from './TransferFilters/TransferFilters.jsx';
import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px' }}>
        <TransferFilters />
        <div className={classes.App['priceFiltersAndTicketsContainer']}>
          <div>sdfsdf</div>
          <div>sdfsdf</div>
          <div>sdfsdf</div>
        </div>
      </div>
    </main>
  );
}

export default App;
