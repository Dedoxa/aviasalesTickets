import { Checkbox } from 'antd';

import { contentBox } from '../App.module.scss';

import classes from './TransferFilters.module.scss';

const TransferFilters = () => {
  return (
    <>
      <div className={contentBox} style={height}>
        <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div className={classes.checkboxContainer}>
          <Checkbox>Все</Checkbox>
          <Checkbox>Без пересадок</Checkbox>
          <Checkbox>1 пересадка</Checkbox>
          <Checkbox>2 пересадки</Checkbox>
          <Checkbox>3 пересадки</Checkbox>
        </div>
      </div>
    </>
  );
};

export default TransferFilters;
