function convertObject(object) {
  const entries = Object.entries(object);
  return entries.map(element => `[${element.toString()}]`).toString();
}