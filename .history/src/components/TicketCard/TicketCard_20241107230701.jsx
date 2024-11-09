import { format, add } from 'date-fns';

import { contentBox } from '../../App.module.scss';

import classes from './TicketCard.module.scss';

const TicketCard = (data) => {
  const ticket = data.data;
  const price = ticket.price;
  const carrier = ticket.carrier;

  const toOrigin = ticket.segments[0].origin;
  const toDestination = ticket.segments[0].destination;
  const toDuration = ticket.segments[0].duration;
  const toDurationHours = Math.floor(toDuration / 60);
  const toDurationMinutes = toDuration % 60;
  const toDepartureDate = ticket.segments[0].date;
  const toDepartureTime = format(toDepartureDate, 'HH:mm');
  const toArrivalDate = add(toDepartureDate, {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: toDuration,
    seconds: 0,
  });
  const toArrivalTime = format(toArrivalDate, 'HH:mm');
  const toStops = ticket.segments[0].stops;

  const backOrigin = ticket.segments[1].origin;
  const backDestination = ticket.segments[1].destination;
  const backDuration = ticket.segments[1].duration;
  const backDurationHours = Math.floor(backDuration / 60);
  const backDurationMinutes = backDuration % 60;
  const backDepartureDate = ticket.segments[1].date;
  const backDepartureTime = format(backDepartureDate, 'HH:mm');
  const backArrivalDate = add(backDepartureDate, {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: backDuration,
    seconds: 0,
  });
  const backArrivalTime = format(backArrivalDate, 'HH:mm');
  const backStops = ticket.segments[1].stops;

  const stopsString = (arr, type) => {
    if (type === 'count') {
      if (arr.length === 0) return 'БЕЗ ПЕРЕСАДОК';
      if (arr.length === 1) return '1 ПЕРЕСАДКА';
      if (arr.length === 2) return '2 ПЕРЕСАДКИ';
      if (arr.length === 3) return '3 ПЕРЕСАДКИ';
    }
    if (type === 'names') {
      if (arr.length === 0) return '';
      if (arr.length === 1) return `${arr[0]}`;
      if (arr.length === 2) return `${arr[0]}, ${arr[1]}`;
      if (arr.length === 3) return `${arr[0]}, ${arr[1]}, ${arr[2]}`;
    }
  };

  return (
    <div className={contentBox} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className={classes.mainTicketInfo}>
        <span className={classes['price']}>
          {price} Р; {carrier} Company
        </span>
        <img src={`http://pics.avs.io/110/36/${carrier}.png`} alt="companyLogo"></img>
      </div>
      <div className={classes.otherTicketInfo}>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>
              {toOrigin}-{toDestination}
            </div>
            <div>
              {toDepartureTime}-{toArrivalTime}
            </div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>В ПУТИ</div>
            <div>
              {toDurationHours}ч {toDurationMinutes}м
            </div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{stopsString(toStops, 'count')}</div>
            <div>{stopsString(toStops, 'names')}</div>
          </div>
        </div>
        <div className={classes['infoRow']}>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>
              {backOrigin}-{backDestination}
            </div>
            <div>
              {backDepartureTime}-{backArrivalTime}
            </div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>В ПУТИ</div>
            <div>
              {backDurationHours}ч {backDurationMinutes}м
            </div>
          </div>
          <div className={classes['infoTwoLined']}>
            <div className={classes['titleLine']}>{stopsString(backStops, 'count')}</div>
            <div>{stopsString(backStops, 'names')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
