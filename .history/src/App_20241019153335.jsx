// import React from 'react';

import TransferFilters from './TransferFilters/TransferFilters.jsx';
import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.contentBox}>
      <AppIcon />
      <div className={classes.hehmda}>
        <span className={classes['textSpan']}>Хэйхо</span>
      </div>
      <TransferFilters />
    </div>
  );
}

export default App;
