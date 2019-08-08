export function bouncer(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (new Boolean(arr[i]) == false) {
          arr.splice(i, 1);
        }
      }
      return arr;
}