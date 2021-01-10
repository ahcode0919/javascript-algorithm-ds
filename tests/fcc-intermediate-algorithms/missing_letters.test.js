import { fearNotLetter } from '../../src/fcc-intermediate-algorithms/missing_letters';

test('should find missing character', () => {
  expect(fearNotLetter('abcdefghjklmno')).toBe('i');
  expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
});
