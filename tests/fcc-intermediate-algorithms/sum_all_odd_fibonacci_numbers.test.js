import { sumFibs } from '../../src/fcc-intermediate-algorithms/sum_all_odd_fibonacci_numbers';

test('should sum all odd Fibonacci numbers', () => {
  expect(() => sumFibs(0)).toThrow(
    'Fibonacci progression upper bound must be >= 1'
  );
  expect(sumFibs(1)).toBe(2);
  expect(sumFibs(2)).toBe(2);
  expect(sumFibs(10)).toBe(10);
});
