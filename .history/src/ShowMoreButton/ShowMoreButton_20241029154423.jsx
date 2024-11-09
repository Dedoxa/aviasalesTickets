import { Button } from 'antd';

import classes from './ShowMoreButton.module.scss';

const ShowMoreButton = () => {
  return (
    <div className={classes.showMoreButton}>
      <Button block="true" type="primary">ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</Button>
    </div>
  );
};

export default ShowMoreButton;