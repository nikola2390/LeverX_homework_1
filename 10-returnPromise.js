function returnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve!');
    }, 6000);
  });
}