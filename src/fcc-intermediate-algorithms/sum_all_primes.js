export function sumPrimes(num) {
  const generatePrimes = (upperBound) => {
    if (upperBound < 2) {
      throw 'Upperbound must be >= 2';
    }
    const primes = [2];
    for (let i = 3; i <= upperBound; i += 2) {
      if (primes.find((val) => i % val === 0) === undefined) {
        primes.push(i);
      }
    }
    return primes;
  };
  return generatePrimes(num).reduce((acc, val) => acc + val);
}
