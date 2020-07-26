// Clean all whitespaces from a string.
function cleanWhitespace(string) {
  return string.replace(/\s/g, '');
}

// Escape Regex special characters.
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

// Create a Regex with insensitive case flag.
function insensitiveRegex(string) {
  return new RegExp(escapeRegex(string), 'i');
}

// Create an array of Regular Expressions from comma-separated string for $in MongoDB query.
function inRegex(string) {
  return string.split(',').map(query => insensitiveRegex(query));
}

// getFilters(object, array) → Object
// Get a map of data field name and its array of filter keys for $in.
// { fieldName: { $in: [keyRegexOne, keyRegexTwo, ...nth_keyRegex] } }
function getFiltersFromQuery(query, excluded) {
  let filters = {};
  for (const [key, value] of Object.entries(query)) {
    // If it's not the excluded query fields, then create an $in query.
    if (!excluded.includes(key)) filters[key] = { $in: inRegex(value) };
  }
  return filters;
}

module.exports = {
  cleanWhitespace,
  escapeRegex,
  insensitiveRegex,
  inRegex,
  getFiltersFromQuery,
};
