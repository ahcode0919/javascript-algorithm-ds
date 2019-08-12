export function truthCheck(collection, pre) {
  return collection.every((val) => Boolean(val[pre]));
}