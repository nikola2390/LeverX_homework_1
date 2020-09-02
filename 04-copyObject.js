function copyObject(object) {
  return Object.fromEntries(Object.entries(object).map(([a, b]) => [b, a]));
}