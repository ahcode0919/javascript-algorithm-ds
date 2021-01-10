import { convertHTML } from '../../src/fcc-intermediate-algorithms/convert_html_entities';

test('should convert HTML entities', () => {
  expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
});
