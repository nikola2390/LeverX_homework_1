function arrayOfPromises(array) {
  return Promise.allSettled(array).then(results => {
    results.forEach(result => {
      console.log(result.status);
    })});
}