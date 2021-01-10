import { mutation } from '../../src/fcc-basic-algorithms/mutations';

test('should find mutations', () => {
  expect(mutation(['hello', 'hey'])).toBe(false);
  expect(mutation(['hEllo', 'Hello'])).toBe(true);
});
