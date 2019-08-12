export function addTogether(...arr) {
  if (!arr.every(val => typeof(val) === 'number')) {
    return undefined;
  }
  if (arr.length == 2) {
    return arr[0] + arr[1];
  }
  return (val) => {
    if (typeof(val) !== 'number') {
      return undefined;
    }
    return val + arr[0];
  }
}