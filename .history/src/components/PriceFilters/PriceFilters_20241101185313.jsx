import { Segmented } from 'antd';


const PriceFilters = () => {
  return (
    <Segmented
      options={['САМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']}
      onChange={(value) => {
        switch value {
          case 'САМЫЙ ДЕШЁВЫЙ':
            store.dispatch()
        }
      }}
    />
  );
};

export default PriceFilters;
