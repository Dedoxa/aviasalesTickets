import { Segmented } from 'antd';

const PriceFilters = () => {
  return <Segmented options={['САМЫЙ ДЕШЁВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ']} onChange={() => {console.log(value)}} />;
};

export default PriceFilters;
