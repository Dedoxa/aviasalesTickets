// import React from 'react';

import TransferFilters from './TransferFilters/TransferFilters.jsx';
import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  return (
    <>
      <AppIcon />
      <div className={classes.hehmda}>
        <span className={classes['textSpan']}>Хэйхо</span>
      </div>
      <TransferFilters />
    </>
  );
}

export default App;
