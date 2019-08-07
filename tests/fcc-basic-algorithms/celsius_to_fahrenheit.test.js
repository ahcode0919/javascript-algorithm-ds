import { convertToF } from '../../src/fcc-basic-algorithms/celsius_to_fahrenheit';

test('should convert celsius to fahrenheit', () => {
  expect(convertToF(-30)).toBe(-22);
  expect(convertToF(0)).toBe(32);
  expect(convertToF(30)).toBe(86);
});