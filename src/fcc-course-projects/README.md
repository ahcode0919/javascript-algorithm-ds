<!-- markdownlint-disable MD001 -->

# Freecodecamp Algorithm Projects

From the Freecodecamp Javascript Certification Algorithms Projects module

- [Palindrome Checker](#palindrome-checker)
- [Roman Numeral Converter](#roman-numeral-converter)
- [Caesars Cipher](#caesars-cipher)
- [Telephone Number Validator](#telephone-number-validator)

## Palindrome Checker

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

```javascript
export function palindrome(str) {
  const normalizedStr = str
    .toLowerCase()
    .split(/[\W_]+/)
    .join('');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
```

## Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

```javascript
export function convertToRoman(num) {
  var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = [
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

  var romanNumeral = '';

  for (var index = 0; index < number.length; index += 1) {
    while (number[index] <= num) {
      romanNumeral += numerals[index];
      num -= number[index];
    }
  }

  return romanNumeral;
}
```

## Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus `'A' ↔ 'N', 'B' ↔ 'O'` and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

```javascript
export function rot13(str) {
  // A = 0 , Z = 25
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let decoded = [];
  for (let i = 0; i < str.length; i += 1) {
    if (/\W/.test(str[i])) {
      decoded.push(str[i]);
      continue;
    }
    const startIndex = alphabet.indexOf(str[i]);
    const newIndex =
      startIndex + 13 <= 25 ? startIndex + 13 : startIndex + 13 - 26;
    decoded.push(alphabet[newIndex]);
  }
  return decoded.join('');
}
```

## Telephone Number Validator

Return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

```text
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

```javascript
export function telephoneCheck(str) {
  return /^(1 ?)?(\([0-9]{3}\)|[0-9]{3})[ \-]?[0-9]{3}[ \-]?[0-9]{4}$$/.test(
    str
  );
}
```

## Cash Register

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

cid is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a status key and a change key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

```javascript
export function checkCashRegister(price, cash, cid) {
  const currencyVals = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  const expectedChange = cash * 100 - price * 100;
  const cidTotal = cid.reduce((acc, val) => acc + val[1] * 100, 0);

  let change = [];
  let normCid = cid.slice(0).map((val) => [val[0], Math.round(val[1] * 100)]);
  let remainingChange = expectedChange;

  if (cidTotal < expectedChange) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  for (let val of currencyVals) {
    if (val > remainingChange) {
      continue;
    }
    let currency = numberToCurrency(val);
    let cidCurrency = normCid.find((val) => val[0] === currency);
    let dispersedChange = [currency, 0];

    if (cidCurrency[1] === 0) {
      change.push(dispersedChange);
      continue;
    }

    while (
      cidCurrency[1] > 0 &&
      remainingChange > 0 &&
      remainingChange >= val
    ) {
      cidCurrency[1] -= val;
      remainingChange -= val;
      dispersedChange[1] += val;
    }
    change.push(dispersedChange);
  }

  if (remainingChange > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  if (normCid.reduce((acc, val) => acc + val[1], 0) === 0) {
    return { status: 'CLOSED', change: cid };
  }
  return {
    status: 'OPEN',
    change: change.map((val) => [val[0], val[1] / 100]),
  };
}

function numberToCurrency(num) {
  switch (num) {
    case 10000:
      return 'ONE HUNDRED';
    case 2000:
      return 'TWENTY';
    case 1000:
      return 'TEN';
    case 500:
      return 'FIVE';
    case 100:
      return 'ONE';
    case 25:
      return 'QUARTER';
    case 10:
      return 'DIME';
    case 5:
      return 'NICKEL';
    case 1:
      return 'PENNY';
    default:
      throw 'Invalid Currency Amount';
  }
}
```
