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
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['']}>MOW-HKT</div>
            <div>00:00-00:00</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['']}>В ПУТИ</div>
            <div>0ч 00м</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['']}>2 ПЕРЕСАДКИ</div>
            <div>HKG, JNB</div>
          </div>
        </div>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['']}>MOW-HKT</div>
            <div>00:00-00:00</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['']}>В ПУТИ</div>
            <div>0ч 00м</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['']}>2 ПЕРЕСАДКИ</div>
            <div>HKG, JNB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
