const toExcluded = (array, elementName) => {
    const idx = array.findIndex((element) => element === elementName);
    return array.toSpliced(idx, 1)
}

export default toExcluded;
