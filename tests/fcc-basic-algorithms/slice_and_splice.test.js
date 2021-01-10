import {
  frankenSplice,
  frankenSplice2,
} from '../../src/fcc-basic-algorithms/slice_and_splice';

test('should insert elements in second array', () => {
  expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  expect(frankenSplice([1, 2], ['a', 'b'], 1)).toEqual(['a', 1, 2, 'b']);
});

test('should insert elements in second array', () => {
  expect(frankenSplice2([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  expect(frankenSplice2([1, 2], ['a', 'b'], 1)).toEqual(['a', 1, 2, 'b']);
});
