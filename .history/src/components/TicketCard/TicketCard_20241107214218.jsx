import { contentBox } from '../../App.module.scss';

import classes from './TicketCard.module.scss';

const TicketCard = (data) => {
  console.log(data);
  const price = data.price;
  const carrier = data.carrier;
  // const toOrigin = data.segments[0].origin;
  // const toDestination = data.segments[0].destination;
  // const toDate = data.segments[0].date;
  // const toDuration = data.segments[0].duration;
  // const toStops = data.segments[0].stops;
  // const backOrigin = data.segments[1].origin;
  // const backDestination = data.segments[1].destination;
  // const backDate = data.segments[1].date;
  // const backDuration = data.segments[1].duration;
  // const backStops = data.segments[1].stops;

  return (
    <div className={contentBox} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className={classes.mainTicketInfo}>
        <span className={classes['price']}>5 000 Р</span>
        <img src="" alt="companyLogo"></img>
      </div>
      <div className={classes.otherTicketInfo}>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>MOW-HKT</div>
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
            <div className={classes['titleLine']}>MOW-HKT</div>
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
