export function getIndexToIns(arr, num) {
  let index = arr.length;
  const sortedArray = arr.slice(0).sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i += 1) {
    if (num <= sortedArray[i]) {
      index = i;
      break;
    }
  }
  return index;
}
