import { convertToRoman } from "../../src/fcc-course-projects/roman_numeral_converter";

test("should convert numbers to roman numerals", () => {
  expect(convertToRoman(2)).toBe("II");
  expect(convertToRoman(4)).toBe("IV");
  expect(convertToRoman(12)).toBe("XII");
  expect(convertToRoman(45)).toBe("XLV");
  expect(convertToRoman(76)).toBe("LXXVI");
  expect(convertToRoman(100)).toBe("C");
  expect(convertToRoman(123)).toBe("CXXIII");
  expect(convertToRoman(778)).toBe("DCCLXXVIII");
  expect(convertToRoman(1023)).toBe("MXXIII");
  expect(convertToRoman(3999)).toBe("MMMCMXCIX");
});
