import {
  largestOfFour,
  largestOfFour2,
} from '../../src/fcc-basic-algorithms/largest_number_in_arrays';

test('should find largest number in nested arrays', () => {
  const array = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ];
  expect(largestOfFour(array)).toStrictEqual([27, 5, 39, 1001]);
});

test('should find largest number in nested arrays', () => {
  const array = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ];
  expect(largestOfFour2(array)).toStrictEqual([27, 5, 39, 1001]);
});
