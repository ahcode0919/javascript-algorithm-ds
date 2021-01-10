import { telephoneCheck } from '../../src/fcc-course-projects/telephone_number';

test('should check telephone numbers', () => {
  expect(telephoneCheck('2323dfsf')).toBe(false);
  expect(telephoneCheck('5555555555')).toBe(true);
  expect(telephoneCheck('1 555-555-5555')).toBe(true);
  expect(telephoneCheck('555-555-5555')).toBe(true);
  expect(telephoneCheck('1 555)555-5555')).toBe(false);
  expect(telephoneCheck('(6054756961)')).toBe(false);
});
