import { Button } from 'antd';

import store from '../../redux/store';
import { SHOW_MORE_TICKETS } from '../../redux/actions';

import classes from './ShowMoreButton.module.scss';

const ShowMoreButton = () => {
  return (
    <div className={classes.showMoreButton}>
      <Button block="true" type="primary" onClick={() => store.dispatch(SHOW_MORE_TICKETS)}>
        ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
      </Button>
    </div>
  );
};

export default ShowMoreButton;
