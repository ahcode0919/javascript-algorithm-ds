export function truthCheck(collection, pre) {
  return collection.every((val) => val[pre] !== undefined);
}
