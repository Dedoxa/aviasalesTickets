import React from 'react';
import { Checkbox } from 'antd';

import { contentBox } from '../App.module.scss';

import classes from './TransferFilters.module.scss';

const TransferFilters = () => {
  return (
    <div className={contentBox}>
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <div className={classes.checkboxContainer}>
        <Checkbox className={classes.checkbox} >Все</Checkbox>
        <Checkbox className={classes.checkbox} >Без пересадок</Checkbox>
        <Checkbox className={classes.checkbox} >1 пересадка</Checkbox>
        <Checkbox className={classes.checkbox} >2 пересадки</Checkbox>
        <Checkbox className={classes.checkbox} >3 пересадки</Checkbox>
      </div>
    </div>
  );
};

export default TransferFilters;
