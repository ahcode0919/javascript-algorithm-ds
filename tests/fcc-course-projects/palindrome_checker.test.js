import { palindrome } from "../../src/fcc-course-projects/palindrome_checker";

test('should ', () => {
  expect(palindrome('aba')).toBe(true);
  expect(palindrome('Race Car')).toBe(true);
  expect(palindrome('2!4 4_2')).toBe(true);
  expect(palindrome('test')).toBe(false);
  expect(palindrome('almostomla')).toBe(false);
});