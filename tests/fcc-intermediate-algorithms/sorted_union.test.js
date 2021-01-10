import { uniteUnique } from '../../src/fcc-intermediate-algorithms/sorted_union';

test('should flatten arrays and remove duplicates', () => {
  expect(uniteUnique([1, 2], [2, 3])).toEqual([1, 2, 3]);
});
