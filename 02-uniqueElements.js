function uniqueElements(array1, array2) {
  const flatArray1 = array1.flat(Infinity);
  const flatArray2 = array2.flat(Infinity);
  const commonArray = [...flatArray1, ...flatArray2];
  const set = new Set(commonArray);
  return Array.from(set).sort((a, b) => a - b); 
}