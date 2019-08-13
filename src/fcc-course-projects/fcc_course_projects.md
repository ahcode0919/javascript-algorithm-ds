<!-- markdownlint-disable MD001 -->

# Freecodecamp Algorithm Projects

From the Freecodecamp Javascript Certification Algorithms Projects module

- [Palindrome Checker](#palindrome-checker)
- [Roman Numeral Converter](#roman-numeral-converter)
- [Caesars Cipher](#caesars-cipher)

#### Palindrome Checker

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

```javascript
export function palindrome(str) {
  const normalizedStr = str.toLowerCase().split(/[\W_]+/).join('');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
```

#### Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

```javascript
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
```
