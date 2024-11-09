import { Segmented } from 'antd';

const PriceFilters = () => {
  return (
    <Segmented
      options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
    />
  );
};

export default PriceFilters;
