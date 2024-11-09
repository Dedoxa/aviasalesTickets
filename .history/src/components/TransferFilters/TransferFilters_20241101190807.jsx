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
            onChange={onCheckboxChange(value)}
          >
            Все
          </Checkbox>
          <Checkbox
            onChange={(value) => {
              console.log(value);
            }}
          >
            Без пересадок
          </Checkbox>
          <Checkbox
            onChange={(value) => {
              console.log(value);
            }}
          >
            1 пересадка
          </Checkbox>
          <Checkbox
            onChange={(value) => {
              console.log(value);
            }}
          >
            2 пересадки
          </Checkbox>
          <Checkbox
            onChange={(value) => {
              console.log(value);
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
