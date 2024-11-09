// import React from 'react';

import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.contentBox}>
      <AppIcon />
      <div className={classes.hehmda}>
        <span className={classes['textSpan']}>Хэйхо</span>
      </div>
    </div>
  );
}

export default App;
