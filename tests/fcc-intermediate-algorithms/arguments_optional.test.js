import { addTogether } from '../../src/fcc-intermediate-algorithms/arguments_optional';

test('should add arguments or return a function', () => {
  expect(addTogether(2, 4)).toBe(6);
  expect(addTogether(2)(4)).toBe(6);
  expect(addTogether('3', 4)).toBe(undefined);
  expect(addTogether(2)([3])).toBe(undefined);
});
