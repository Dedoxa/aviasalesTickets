import { contentBox } from '../App.module.scss';

import classes from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <div className={contentBox}>
      <div className={classes.mainTicketInfo}>
        <span>5 000 Р</span>
        <img src="" alt="companyLogo"></img>
      </div>
      <div className={classes.otherTicketInfo}>
        <span>5 000 Р</span>
        <span>5 000 Р</span>
        <span>5 000 Р</span>
      </div>
    </div>
  );
};

export default TicketCard;
