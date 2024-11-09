import { contentBox } from '../App.module.scss';

import classes from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <div className={contentBox}>
      <div className={classes.mainTicketInfo}>
        <span></span>
        <img src='' alt='companyLogo'></img>
      </div>
    </div>
  );
};

export default TicketCard;