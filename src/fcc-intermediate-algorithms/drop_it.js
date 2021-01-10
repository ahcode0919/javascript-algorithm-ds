export function dropElements(arr, func) {
  const element = arr.find(func);
  if (element === undefined) {
    return [];
  }
  return arr.slice(arr.indexOf(element));
}
