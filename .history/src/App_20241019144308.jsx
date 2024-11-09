// import React from 'react';

import AppIcon from './AppIcon/AppIcon.jsx';
import classes from './App.module.scss';

function App() {
  console.log(classes);
  return (
    <>
      <AppIcon />
      <span className={classes.textSpan}>Хэйхо</span>
    </>
  );
}

export default App;
