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
        <div>
          <div>
            <span className={classes['']}>MOW-HKT</span>
            <span>00:00-00:00</span>
          </div>
          <div>
            <span className={classes['']}>В ПУТИ</span>
            <span>0ч 00м</span>
          </div>
          <div>
            <span className={classes['']}>2 ПЕРЕСАДКИ</span>
            <span>HKG, JNB</span>
          </div>
        </div>
        <div>
          <div>
            <span className={classes['']}>MOW-HKT</span>
            <span>00:00-00:00</span>
          </div>
          <div>
            <span className={classes['']}>В ПУТИ</span>
            <span>0ч 00м</span>
          </div>
          <div>
            <span className={classes['']}>2 ПЕРЕСАДКИ</span>
            <span>HKG, JNB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
