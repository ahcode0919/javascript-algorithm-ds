import { dropElements } from '../../src/fcc-intermediate-algorithms/drop_it';

test('should remove elements that do not satisfy the function', () => {
  expect(dropElements([1, 2, 3, 4], (n) => n >= 3)).toEqual([3, 4]);
  expect(dropElements([1, 2, 3, 7, 4], (n) => n > 3)).toEqual([7, 4]);
  expect(dropElements([0, 1, 0, 1], (n) => n === 1)).toEqual([1, 0, 1]);
  expect(dropElements([1, 2, 3, 4], (n) => n > 5)).toEqual([]);
});
