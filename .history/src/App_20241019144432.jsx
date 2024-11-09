// import React from 'react';

import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  console.log(classes);
  return (
    <>
      <AppIcon />
      <div className={classes.}>
        <span className={classes['textSpan']}>Хэйхо</span>
      </div>
    </>
  );
}

export default App;
