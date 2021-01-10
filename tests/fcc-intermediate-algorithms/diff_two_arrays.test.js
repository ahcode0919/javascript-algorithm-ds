import { diffArray } from '../../src/fcc-intermediate-algorithms/diff_two_arrays';

test('should diff two arrays', () => {
  expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
  expect(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5])).toEqual([4]);
});
