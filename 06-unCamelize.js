function unCamelize(string, divider = " ") {
  let start = 0;
  let end;
  const sliceArr = [];
  for (let i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i])) {
      end = i;
      sliceArr.push(string.slice(start, end));
      start = end;
    }
  }
  sliceArr.push(string.slice(start));
  for (let i = 1; i < sliceArr.length; i++) {
    sliceArr[i] = `${sliceArr[i][0].toLowerCase()}${sliceArr[i].slice(1)}`;
  }
  return sliceArr.join(divider);
}