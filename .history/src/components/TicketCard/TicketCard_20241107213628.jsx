import { contentBox } from '../../App.module.scss';

import classes from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <div className={contentBox} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className={classes.mainTicketInfo}>
        <span className={classes['price']}>{price} Р {carrier}</span>
        <img src="" alt="companyLogo"></img>
      </div>
      <div className={classes.otherTicketInfo}>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{toOrigin}-{toDestination}</div>
            <div>00:00-00:00</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>В ПУТИ</div>
            <div>00ч 00м</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>2 ПЕРЕСАДКИ</div>
            <div>HKG, JNB</div>
          </div>
        </div>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{backOrigin}-{backDestination}</div>
            <div>00:00-00:00</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>В ПУТИ</div>
            <div>00ч 00м</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>2 ПЕРЕСАДКИ</div>
            <div>HKG, JNB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
