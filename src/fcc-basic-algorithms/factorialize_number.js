export function factorialize(num) {
  if (num < 0) {
    throw new Error('Number must be positive');
  }

  let factorial = 1;
  for (let i = 1; i <= num; i += 1) {
    factorial *= i;
  }

  return factorial;
}
