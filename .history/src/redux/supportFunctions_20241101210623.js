const toExcluded = (array, elementName) => {
    const idx = array.findIndex((element) => element === elementName);
    return array.toSpliced()
}

export default toExcluded;
