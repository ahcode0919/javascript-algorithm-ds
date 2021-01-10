export function sumAll(arr) {
  const ordered = arr.slice(0).sort((a, b) => a - b);
  let range = 0;

  for (let i = ordered[0] + 1; i < ordered[1]; i += 1) {
    range += i;
  }

  return arr[0] + arr[1] + range;
}
