import { Checkbox } from 'antd';
import { useSelector } from 'react-redux';

import { contentBox } from '../../App.module.scss';
import * as actions from '../../redux/actions';
import store from '../../redux/store';

import classes from './TransferFilters.module.scss';

const TransferFilters = () => {
  const onCheckboxChange = (string) => {
    switch (string) {
      case 'all':
        store.dispatch(actions.ALL);
        break;
      case 'without_transfer':
        store.dispatch(actions.WITHOUT_TRANSFER);
        break;
      case 'one_transfer':
        store.dispatch(actions.ONE_TRANSFER);
        break;
      case 'two_transfers':
        store.dispatch(actions.TWO_TRANSFERS);
        break;
      case 'three_transfers':
        store.dispatch(actions.THREE_TRANSFERS);
        break;
      default:
        console.log(store.getState());
        break;
    }
  };

  const thisTransferFilters = useSelector((state) => state.transferFilters);
  const allFilterBoolean = thisTransferFilters.includes('ALL') ? true : false;
  const noTransfersBoolean = thisTransferFilters.includes('WITHOUT_TRANSFER') ? true : false;
  const oneTransferBoolean = thisTransferFilters.includes('ONE_TRANSFER') ? true : false;
  const twoTransfersBoolean = thisTransferFilters.includes('TWO_TRANSFERS') ? true : false;
  const threeTransfersBoolean = thisTransferFilters.includes('WITHOUT_TRANSFER') ? true : false;

  return (
    <>
      <div className={contentBox}>
        <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div className={classes.checkboxContainer}>
          <Checkbox
            id="all"
            onChange={(value) => {
              onCheckboxChange(value.target.id);
            }}
          >
            Все
          </Checkbox>
          <Checkbox
            id="without_transfer"
            onChange={(value) => {
              onCheckboxChange(value.target.id);
            }}
          >
            Без пересадок
          </Checkbox>
          <Checkbox
            id="one_transfer"
            onChange={(value) => {
              onCheckboxChange(value.target.id);
            }}
          >
            1 пересадка
          </Checkbox>
          <Checkbox
            id="two_transfers"
            onChange={(value) => {
              onCheckboxChange(value.target.id);
            }}
          >
            2 пересадки
          </Checkbox>
          <Checkbox
            id="three_transfers"
            onChange={(value) => {
              onCheckboxChange(value.target.id);
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
