function countSubstring(string, substring) {
  if (substring === '') {
    return 0;
  }
  return string.split(substring).length - 1;
}