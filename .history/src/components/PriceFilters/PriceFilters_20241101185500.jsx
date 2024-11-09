import { Segmented } from 'antd';
import store from '../../redux/store';

const PriceFilters = () => {
  return (
    <Segmented
      options={['САМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']}
      onChange={(value) => {
        switch (value) {
          case 'САМЫЙ ДЕШЁВЫЙ':
            store.dispatch(actions.CHEAPEST)
        }
      }}
    />
  );
};

export default PriceFilters;
