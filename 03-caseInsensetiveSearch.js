function caseInsensitiveSearch(string, searchString) {
  if(string.toLowerCase().includes(searchString.toLowerCase())) {
    return "Matched";
  }
  return "Not matched";
}