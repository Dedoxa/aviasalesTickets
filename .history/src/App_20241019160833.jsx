// import React from 'react';

import TransferFilters from './TransferFilters/TransferFilters.jsx';
import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  return (
    <main className={classes.App}>
      <AppIcon />
      <TransferFilters />
    </main>
  );
}

export default App;
