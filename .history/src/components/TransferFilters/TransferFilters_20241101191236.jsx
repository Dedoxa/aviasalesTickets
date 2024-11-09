import { Checkbox } from 'antd';

import { contentBox } from '../../App.module.scss';

import classes from './TransferFilters.module.scss';

const TransferFilters = () => {
  const onCheckboxChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className={contentBox}>
        <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div className={classes.checkboxContainer}>
          <Checkbox
            defaultChecked
            id="all"
            onChange={(value) => {
              onCheckboxChange(value);
            }}
          >
            Все
          </Checkbox>
          <Checkbox
            id="without_transfer"
            onChange={(value) => {
              onCheckboxChange(value);
            }}
          >
            Без пересадок
          </Checkbox>
          <Checkbox
            id="one_transfer"
            onChange={(value) => {
              onCheckboxChange(value);
            }}
          >
            1 пересадка
          </Checkbox>
          <Checkbox
            id="two_transfers"
            onChange={(value) => {
              onCheckboxChange(value);
            }}
          >
            2 пересадки
          </Checkbox>
          <Checkbox
            id="three_transfers"
            onChange={(value) => {
              onCheckboxChange(value);
            }}
          >
            3 пересадки
          </Checkbox>
        </div>
      </div>
    </>
  );
};

export default TransferFilters;