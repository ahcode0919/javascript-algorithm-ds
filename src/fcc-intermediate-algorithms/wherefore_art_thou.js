export function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter((obj) => {
    for (const key of keys) {
      if (obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}
