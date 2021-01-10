export function bouncer(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (!arr[i]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
