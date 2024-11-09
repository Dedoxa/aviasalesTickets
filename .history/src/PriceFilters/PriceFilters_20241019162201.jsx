import { Segmented } from "antd";

const PriceFilters = () => {
    return (
        <Segmented
    options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
    onChange={(value) => {
      console.log(value); // string
    }}
  />
    )
}

export default PriceFilters;