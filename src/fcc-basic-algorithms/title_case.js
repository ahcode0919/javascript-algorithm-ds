export function titleCase(str) {
  const capitalizedWords = str
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(/^\w/, (char) => char.toUpperCase()));
  return capitalizedWords.join(' ');
}
