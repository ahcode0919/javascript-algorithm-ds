export function findElement(arr, func) {
  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}
