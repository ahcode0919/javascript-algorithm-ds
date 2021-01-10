export function chunkArrayInGroups(arr, size) {
  const matrix = [];
  let index = 0;
  while (index < arr.length) {
    const tempArray = arr.slice(index, index + size);
    matrix.push(tempArray);
    index += size;
  }
  return matrix;
}
