<!-- markdownlint-disable MD001 -->

# Freecodecamp Basic Algorithms

From the Freecodecamp Javascript Certification Basic Algorithms module

- [Celsius to Fahrenheit](#celsius-to-fahrenheit)
- [Reverse String](#reverse-string)
- [Factorialize Number](#factorialize-number)
- [Find Longest Word In String](#find-longest-word-in-string)
- [Return Largest Number In Nested Arrays](#return-largest-number-in-nested-arrays)
- [Confirm the Ending](#confirm-the-ending)
- [Repeat a String](#repeat-a-string)
- [Truncate String](#truncate-string)
- [Finders Keepers](#finders-keepers)
- [Boo Hoo](#boo-hoo)
- [Title Case](#title-case)
- [Slice and Splice](#slice-and-splice)
- [Falsy Bouncer](#falsy-bouncer)
- [Where Do I Belong](#where-do-i-belong)
- [Mutations](#mutations)
- [Chunky Monkey](#chunky-monkey)

## Celsius to Fahrenheit

Convert celsius temperature to fahrenheit.

```javascript
export function convertToF(celsius) {
  return celsius * (9 / 5) + 32;
}
```

## Reverse String

Reverse a string. Assume character set is spaces and `[a-zA-Z0-1]`.

```javascript
export function reverseString(str) {
  return str.split('').reverse().join('');
}
```

## Factorialize Number

Find the factorial for a non-negative number.

```javascript
export function factorialize(num) {
  if (num < 0) {
    throw 'Number must be positive';
  }

  let factorial = 1;
  for (let i = 1; i <= num; i += 1) {
    factorial *= i;
  }

  return factorial;
}
```

## Find Longest Word In String

Find the length of the longest word in a string.

```javascript
export function findLongestWordLength(str) {
  let longest = 0;
  let words = str.split(' ');

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return longest;
}
```

## Return Largest Number In Nested Arrays

Return an array consisting of the largest number from each provided sub-array.

```javascript
export function largestOfFour(arr) {
  let largest = [];
  for (let subArray of arr) {
    if (subArray.length == 0) {
      continue;
    }
    largest.push(Math.max(...subArray));
  }
  return largest;
}

export function largestOfFour2(arr) {
  let largest = [];
  for (let subArray of arr) {
    if (subArray.length == 0) {
      continue;
    }
    let largestNumber = subArray[0];
    for (let i = 1; i < subArray.length; i += 1) {
      if (subArray[i] > largestNumber) {
        largestNumber = subArray[i];
      }
    }
    largest.push(largestNumber);
  }
  return largest;
}
```

## Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

Ex: Connor, or => true

```javascript
export function confirmEnding(str, target) {
  return str.substring(str.lastIndexOf(target)) === target;
}
```

## Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

```javascript
export function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  let arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push(str);
  }
  return arr.join('');
}
```

## Truncate String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

```javascript
export function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  return str.substring(0, num) + '...';
}
```

## Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

```javascript
export function findElement(arr, func) {
  for (let num of arr) {
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
```

## Boo Hoo

Check if a value is classified as a boolean primitive. Return true or false.

```javascript
export function booWho(bool) {
  return typeof bool === 'boolean';
}
```

## Title Case

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

```javascript
export function titleCase(str) {
  let capitalizedWords = str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.replace(/^\w/, (char) => {
        return char.toUpperCase();
      });
    });
  return capitalizedWords.join(' ');
}
```

## Slice and Splice

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

```javascript
// Slice at next index
export function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice(0);
  for (let i = 0; i < arr1.length; i += 1) {
    newArray.splice(n + i, 0, arr1[i]);
  }
  return newArray;
}

// Slice in reverse at same index
export function frankenSplice2(arr1, arr2, n) {
  let newArray = arr2.slice(0);
  for (let i = arr1.length - 1; i >= 0; i--) {
    newArray.splice(n, 0, arr1[i]);
  }
  return newArray;
}
```

## Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

```javascript
export function bouncer(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
```

## Where Do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

```javascript
export function getIndexToIns(arr, num) {
  let index = arr.length;
  const sortedArray = arr.slice(0).sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i += 1) {
    if (num <= sortedArray[i]) {
      index = i;
      break;
    }
  }
  return index;
}
```

## Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".

```javascript
export function mutation(arr) {
  if (arr[1].length > arr[0]) {
    return false;
  }

  for (let letter of arr[1].split('')) {
    let regex = new RegExp(`${letter}`, 'i');
    if (!regex.test(arr[0])) {
      return false;
    }
  }
  return true;
}
```

## Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```javascript
export function chunkArrayInGroups(arr, size) {
  let matrix = [];
  let index = 0;
  while (index < arr.length) {
    let tempArray = arr.slice(index, index + size);
    matrix.push(tempArray);
    index += size;
  }
  return matrix;
}
```
