import { rot13 } from '../../src/fcc-course-projects/caesars_cipher';

test('should decode caesars cipher', () => {
  expect(rot13('SERR PBQR PNZC!')).toBe('FREE CODE CAMP!');
});
