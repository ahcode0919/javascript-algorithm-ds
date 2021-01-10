export function frankenSplice(arr1, arr2, n) {
  const newArray = arr2.slice(0);
  for (let i = 0; i < arr1.length; i += 1) {
    newArray.splice(n + i, 0, arr1[i]);
  }
  return newArray;
}

export function frankenSplice2(arr1, arr2, n) {
  const newArray = arr2.slice(0);
  for (let i = arr1.length - 1; i >= 0; i--) {
    newArray.splice(n, 0, arr1[i]);
  }
  return newArray;
}
