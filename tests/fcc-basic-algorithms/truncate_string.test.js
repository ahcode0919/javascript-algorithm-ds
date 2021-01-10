import { truncateString } from '../../src/fcc-basic-algorithms/truncate_string';

test('should truncate a string', () => {
  expect(truncateString('A-', 1)).toBe('A...');
  expect(
    truncateString('Peter Piper picked a peck of pickled peppers', 11)
  ).toBe('Peter Piper...');
  expect(truncateString('A-', 2)).toBe('A-');
});
