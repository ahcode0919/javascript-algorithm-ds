export function convertToRoman(num) {
  var number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var numerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanNumeral = '';

  for (var index = 0; index < number.length; index++) {
    while (number[index] <= num) {
      romanNumeral += numerals[index];
      num -= number[index];
    }
  }

  return romanNumeral;
}