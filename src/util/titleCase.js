const toTitleCase = str =>
  str
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

export default toTitleCase;
