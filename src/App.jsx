import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';
import { Spin } from 'antd';

import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useLazyGetTicketsQuery } from './AppAPI.js';
import store from './redux/store.js';
import sortTickets from './sortTicketsFunction.js';
import * as actions from './redux/actions.js';

function App() {
  const { data: idData, error: IDError, isLoading: isLoadingID } = useGetIDQuery();
  const [triggerFetchData, result] = useLazyGetTicketsQuery();

  const currentId = useSelector((state) => state.requestId);

  useEffect(() => {
    if (idData?.searchId && !currentId) {
      store.dispatch({ type: 'SET_ID', newId: idData.searchId });
    }
    if (currentId && result?.data?.stop === undefined) {
      store.dispatch(actions.START_FETCHING);
      triggerFetchData(currentId);
    }
    if (result?.data?.stop === false) {
      triggerFetchData(currentId);
      store.dispatch({ type: 'UPDATE_TICKETS', ticketsArray: result.data.tickets });
    }
    if (result?.data?.stop === true) {
      store.dispatch(actions.STOP_FETCHING);
    }
  }, [idData, result, currentId, triggerFetchData]);

  const currentTickets = useSelector((state) => state.tickets);
  const currentTransferFilters = useSelector((state) => state.transferFilters);
  const currentPriceFilter = useSelector((state) => state.priceFilter);
  const currentRenderedTickets = useSelector((state) => state.renderedTickets);
  const isFetching = useSelector((state) => state.isFetching);

  const sortedTickets = sortTickets(currentTickets, currentTransferFilters, currentPriceFilter, currentRenderedTickets);

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (isLoadingID) {
    return (
      <main className={classes.App}>
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <Spin size="large" />
          <div className={classes['spinText']}>Получение id</div>
        </div>
      </main>
    );
  }

  if (isFetching === true) {
    return (
      <main className={classes.App}>
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <Spin size="large" />
          <div className={classes['spinText']}>Загрузка билетов</div>
        </div>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            {sortedTickets?.map((ticket) => (
              <TicketCard key={uuid4()} data={ticket} />
            ))}
            <ShowMoreButton />
          </div>
        </div>
      </main>
    );
  }
  if (sortedTickets.length > 0) {
    return (
      <main className={classes.App}>
        <AppIcon />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            {sortedTickets?.map((ticket) => (
              <TicketCard key={uuid4()} data={ticket} />
            ))}
            <ShowMoreButton />
          </div>
        </div>
      </main>
    );
  }
  if (sortedTickets.length === 0) {
    return (
      <main className={classes.App}>
        <AppIcon />
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <TransferFilters />
          <div className={classes['priceFiltersAndTicketsContainer']}>
            <PriceFilters />
            <div className={classes['centeredOpenSansText']}>Рейсов, подходящих под заданные фильтры, не найдено.</div>
            <ShowMoreButton />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
