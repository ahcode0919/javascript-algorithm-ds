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

#### Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus `'A' ↔ 'N', 'B' ↔ 'O'` and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

```javascript
export function rot13(str) {
  // A = 0 , Z = 25
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let decoded = [];
  for (let i = 0; i < str.length; i += 1) {
    if (/\W/.test(str[i])) {
      decoded.push(str[i]);
      continue;
    }
    const startIndex = alphabet.indexOf(str[i]);
    const newIndex = startIndex + 13 <= 25 ? startIndex + 13 : (startIndex + 13) - 26;
    decoded.push(alphabet[newIndex]);
  }
  return decoded.join('');
}
```
