function arrayFlat(array) {
  return array.reduce((acc, value) => {
    if(Array.isArray(value)) {
      return acc.concat(arrayFlat(value));
    } else {
      return acc.concat(value);
    }
  }, []).sort((a, b) => a - b);
}