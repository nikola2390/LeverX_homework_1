function filterNullUndefined(array, callback) {
  setTimeout(() => {
    if(!Array.isArray(array)) {
      callback('Please enter an array as first argument');
    }
    const filteredArray = array.filter(value => {
      return value !== null && value !== undefined;
    });
    callback(null, filteredArray)
  }, 5000);
}

function callback(error, data) {
  if(error) {
    throw new Error(error);
  }
  console.log(data);
}