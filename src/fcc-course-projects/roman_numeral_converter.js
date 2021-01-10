export function convertToRoman(num) {
  const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let romanNumeral = '';

  for (let index = 0; index < number.length; index += 1) {
    while (number[index] <= num) {
      romanNumeral += numerals[index];
      num -= number[index];
    }
  }

  return romanNumeral;
}
