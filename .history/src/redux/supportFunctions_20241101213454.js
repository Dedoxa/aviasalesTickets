const toExcluded = (array, elementName) => {
  const idx = array.findIndex((element) => element === elementName);
  return array.toSpliced(idx, 1);
};

const changeTransferFilters = (stateArray, filterName) => {
  if (stateArray.includes(filterName)) {
    const cutOutArray = toExcluded(stateArray, filterName);
    if (stateArray.includes('ALL')) {
      return toExcluded(cutOutArray, 'ALL');
    } else {
      return cutOutArray;
    }
  } else {
    const supplementedArray = stateArray.concat([filterName]);
    if (
      supplementedArray.includes('WITHOUT_TRANSFER') &&
      supplementedArray.includes('ONE_TRANSFER') &&
      supplementedArray.includes('TWO_TRANSFERS') &&
      supplementedArray.includes('THREE_TRANSFERS')
    ) {
      return ['ALL', 'WITHOUT_TRANSFER', 'ONE_TRANSFER', 'TWO_TRANSFERS', 'THREE_TRANSFERS'];
    } else {
      return supplementedArray;
    }
  }
};

export default changeTransferFilters;
