import { Segmented } from 'antd';

import * as actions from '../../redux/actions';
import store from '../../redux/store';

const PriceFilters = () => {
  return (
    <Segmented
      options={['САМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']}
      onChange={(value) => {
        switch (value) {
          case 'САМЫЙ ДЕШЁВЫЙ':
            store.dispatch(actions.CHEAPEST);
            break;
          case 'САМЫЙ БЫСТРЫЙ':
            store.dispatch(actions.FASTEST);
            break;
          case 'ОПТИМАЛЬНЫЙ':
            store.dispatch(actions.OPTIMAL);
            break;
          default:
            console.log(store.getState());
            break;
        }
      }}
    />
  );
};

export default PriceFilters;
