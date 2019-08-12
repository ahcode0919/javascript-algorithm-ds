import { sumPrimes } from "../../src/fcc-intermediate-algorithms/sum_all_primes";

test('should sum prime numbers', () => {
    expect(() => sumPrimes(1)).toThrow('Upperbound must be >= 2')
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
});