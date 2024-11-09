import { contentBox } from '../../App.module.scss';

import classes from './TicketCard.module.scss';

const TicketCard = (data) => {
  const ticket = data.data;
  const price = ticket.price;
  const carrier = ticket.carrier;
  const toOrigin = ticket.segments[0].origin;
  const toDestination = ticket.segments[0].destination;
  const toDate = ticket.segments[0].date;
  const toDuration = ticket.segments[0].duration;
  const toStops = ticket.segments[0].stops;
  const backOrigin = ticket.segments[1].origin;
  const backDestination = ticket.segments[1].destination;
  const backDate = ticket.segments[1].date;
  const backDuration = ticket.segments[1].duration;
  const backStops = ticket.segments[1].stops;

  return (
    <div className={contentBox} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className={classes.mainTicketInfo}>
        <span className={classes['price']}>{price} Р; {carrier} Company</span>
        <img src="" alt="companyLogo"></img>
      </div>
      <div className={classes.otherTicketInfo}>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{toOrigin}-{toDestination}</div>
            <div>00:00-00:00 {toDate}</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>В ПУТИ</div>
            <div>00ч 00м {toDuration}</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{toStops.length} ПЕРЕСАДКИ</div>
            <div>{toStops[0]}, {toStops[1]}, {toStops[2]}</div>
          </div>
        </div>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{backOrigin}-{backDestination}</div>
            <div>00:00-00:00 {backDate}</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>В ПУТИ</div>
            <div>00ч 00м {backDuration}</div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{toStops.length} ПЕРЕСАДКИ</div>
            <div>{backStops[0]}, {backStops[1]}, {backStops[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
