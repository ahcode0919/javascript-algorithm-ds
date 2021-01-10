import { findElement } from '../../src/fcc-basic-algorithms/finders_keepers';

test('should find matching elements', () => {
  expect(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)).toBe(8);
  expect(findElement([1, 3, 5, 9], (num) => num % 2 === 0)).toBe(undefined);
});
