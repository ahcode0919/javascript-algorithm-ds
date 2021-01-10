import { translatePigLatin } from '../../src/fcc-intermediate-algorithms/pig_latin';

test('should translate pig latin', () => {
  expect(translatePigLatin('')).toBe('');
  expect(translatePigLatin('onset')).toBe('onsetway');
  expect(translatePigLatin('tt')).toBe('ttay');
  expect(translatePigLatin('california')).toBe('aliforniacay');
});
