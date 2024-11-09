import TransferFilters from './components/TransferFilters/TransferFilters.jsx';
import AppIcon from './components/AppIcon/AppIcon.jsx';
import PriceFilters from './components/PriceFilters/PriceFilters.jsx';
import TicketCard from './components/TicketCard/TicketCard.jsx';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton.jsx';
import classes from './App.module.scss';
import { useGetIDQuery, useGetTicketsQuery } from './AppAPI.js';

function App() {
  const { data: idData, IDError, isLoading: isLoadingID } = useGetIDQuery();

  const id = idData?.searchId;

  const {
    data: dataById,
    DataError,
    isLoading: isLoadingData,
  } = useGetTicketsQuery(id, {
    skip: !id,
  });

  if (IDError) {
    console.error('Error fetching id: ', IDError);
    return <h1>Error fetching id.</h1>;
  }

  if (DataError) {
    console.error('Error fetching data: ', DataError);
    return <h1>Error fetching data.</h1>;
  }

  if (isLoadingID) return <h1>Loading ID...</h1>;
  if (!id) return <h1>No ID found</h1>;
  if (isLoadingData) return <h1>Loading Data...</h1>;
  if (!dataById) return <h1>No data found</h1>;

  return (
    <main className={classes.App}>
      <AppIcon />
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <TransferFilters />
        <div className={classes['priceFiltersAndTicketsContainer']}>
          <PriceFilters />
          {dataById.tickets.map((ticket) => (
            <TicketCard
              key={dataById.tickets.indexOf(ticket)}
              // price={ticket.price}
              // carrier={ticket.carrier}
              // toOrigin={ticket.segments[0].origin}
              // toDestination={ticket.segments[0].destination}
              // toDate={ticket.segments[0].date}
              // toDuration={ticket.segments[0].duration}
              // toStops={ticket.segments[0].stops}
              // backOrigin={ticket.segments[1].origin}
              // backDestination={ticket.segments[1].destination}
              // backDate={ticket.segments[1].date}
              // backDuration={ticket.segments[1].duration}
              // backStops={ticket.segments[1].stops}
              // data={ticket}
            />
          ))}
          <ShowMoreButton />
        </div>
      </div>
    </main>
  );
}

/*
{
  "price": 58880,
  "carrier": "U6",
  "segments": [
    {
      "origin": "MOW",
      "destination": "HKT",
      "date": "2025-07-02T00:39:27.036Z",
      "duration": 1186,
      "stops": [
        "DEL",
        "DOH"
      ]
    },
    {
      "origin": "HKT",
      "destination": "MOW",
      "date": "2025-08-23T01:43:16.821Z",
      "duration": 806,
      "stops": []
    }
  ]
}
*/

export default App;
