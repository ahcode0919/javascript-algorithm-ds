<!-- markdownlint-disable MD001 -->

# Freecodecamp Intermediate Algorithms

From the Freecodecamp Javascript Certification Intermediate Algorithms module

- [Sum All Numbers In a Range](#sum-all-numbers-in-a-range)
- [Diff Two Arrays](#diff-two-arrays)
- [Seek and Destroy](#seek-and-destroy)
- [Wherefore Art Thou](#wherefore-art-thou)
- [Spinal Tap Case](#spinal-tap-case)
- [Pig Latin](#pig-latin)
- [Search and Replace](#search-and-replace)
- [DNA Pairing](#dna-pairing)
- [Missing Letters](#missing-letters)
- [Sorted Union](#sorted-union)
- [Convert HTML Entities](#convert-html-entities)
- [Sum All Odd Fibonacci Numbers](#sum-all-odd-ficonacci-numbers)
- [Sum All Primes](#sum-all-primes)
- [Smallest Common Multiple](#smallest-common-multiple)
- [Drop It](#drop-it)
- [Binary Agents](#binary-agents)
- [Everything Be True](#everything-be-true)

#### Sum All Numbers In a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

```javascript
export function sumAll(arr) {
    const ordered = arr.slice(0).sort((a, b) => a - b);
    let range = 0;
  
    for (let i = ordered[0] + 1; i < ordered[1]; i++) {
      range += i;
    }

    return (arr[0] + arr[1]) + range;
}
```

#### Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```javascript
export function diffArray(arr1, arr2) {
    return [
        ...arr1.filter((value) => arr2.indexOf(value) === -1),
        ...arr2.filter((value) => arr1.indexOf(value) === -1)
      ]
}
```

#### Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

```javascript
export function destroyer(arr, ...values) {
    return arr.filter((num) => !values.includes(num));
}
```

#### Wherefore Art Thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

```javascript
export function whatIsInAName(collection, source) {
    return collection.filter((obj) => {
        for(let key in source) {
            if (obj[key] !== source[key]) {
                return false;
            }
        }
        return true;
    });
}
```

#### Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```javascript
export function spinalCase(str) {
    return str.split(/[_\W]|(?=[A-Z])/).join('-').toLowerCase();
}
```

#### Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

```javascript
export function translatePigLatin(str) {
    if (str === "") {
        return "";
    }

    if (/^[aeiou]/.test(str)) {
        return str + 'way';
    }

    const splitStr = str.split(/([aeiou].*)/);
    return [splitStr[1], splitStr[0], 'ay'].join('');
}
```

#### Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

```javascript
export function myReplace(str, before, after) {
    const indexOfInsert = str.indexOf(before);
    const preInsert = str.slice(0, indexOfInsert);
    const postInsert = str.slice(indexOfInsert + before.length);

    if (/^[A-Z]/.test(before)) {
        const capitalizedAfter = after.charAt(0).toUpperCase() + after.slice(1);
        return [preInsert, capitalizedAfter, postInsert].join('');
    }

    return [preInsert, after, postInsert].join('');
}
```

#### DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of `AT` and `CG`. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input `GCG`, return `[["G", "C"], ["C","G"],["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```javascript
export function pairElements(str) {
    const pair = function(element) {
        switch (element) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
            default:
                return '';
        }
    }

    const elements = str.split('');
    let pairs = [];
    for (let element of elements) {
        pairs.push([element, pair(element)]);
    }
    return pairs;
}
```

#### Missing Letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

```javascript
export function fearNotLetter(str) {
    if ((str.charCodeAt(str.length - 1) - str.charCodeAt(0)) + 1 === str.length) {
        return undefined;
    }

    for (let i = 0; i < str.length - 1; i++) {
        const currentCharCode = str.charCodeAt(i);
        if (currentCharCode + 1 !== str.charCodeAt(i + 1)) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }

    return undefined;
}
```

#### Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

```javascript
export function uniteUnique(...arr) {
    return arr.reduce((union, subArray) => {
        for (let num of subArray) {
            if (union.indexOf(num) === -1) {
                union.push(num);
            }
        }
        return union;
    }, []);
}
```

#### Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```javascript
export function convertHTML(str) {
    const getEscapedString = function(char) {
        switch (char) {
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '\'':
                return '&apos;';
            case '\"':
                return '&quot;';
            default:
                return char;
        }
    }
    let newString = [];
    for (let char of str) {
        newString.push(getEscapedString(char));
    }

    return newString.join('');
}
```

#### Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

```javascript
export function sumFibs(num) {
    const getFibonacciNumbers = (upperBound) => {
        let numbers = [1, 1];
        if (upperBound == 0) {
            throw 'Fibonacci progression upper bound must be >= 1';
        }
        const total = () => numbers[numbers.length - 2] + numbers[numbers.length - 1];
        while (total() <= upperBound) {
            numbers.push(total());
        }
        return numbers;
    }

    let numbers = getFibonacciNumbers(num).filter((num) => num % 2 !== 0);
    return numbers.reduce((acc, num) => acc + num);
}
```

#### Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

```javascript
export function sumPrimes(num) {
    const generatePrimes = (upperBound) => {
        if (upperBound < 2) {
            throw 'Upperbound must be >= 2';
        }
        let primes = [2]
        for (let i = 3; i <= upperBound; i += 2) {
            if (primes.find(val => i % val === 0) === undefined) {
                primes.push(i);
            }
        }
        return primes;
    }
    return generatePrimes(num).reduce((acc, val) => acc + val);
}
```

#### Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

```javascript
export function smallestCommons(arr) {
    const divisible = (target, low, high) => {
        for(let k = low; k <= high; k++) {
            if (target % k !== 0) {
                return false;
            }
        }
        return true;
    }

    let sortedNums = arr[0] < arr[1] ? arr.slice(0) : [arr[1], arr[0]];
    for (let i = sortedNums[1];; i += sortedNums[1]) {
        if (divisible(i, sortedNums[0], sortedNums[1])) {
            return i;
        }
    }
}
```

#### Drop It

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

```javascript
export function dropElements(arr, func) {
  const element = arr.find(func);
  if (element === undefined) {
    return [];
  }
  return arr.slice(arr.indexOf(element));
}
```

#### Steamroller

Flatten a nested array. You must account for varying levels of nesting.

```javascript
export function steamrollArray(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val)
  }, []);
}
```

#### Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

```javascript
export function binaryAgents(str) {
  let binaryArray = str.split(" ");
  let stringArray = binaryArray.map(val => String.fromCharCode(parseInt(val, 2)));
  return stringArray.join("");
}
```

#### Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

```javascript
export function truthCheck(collection, pre) {
  return collection.every((val) => Boolean(val[pre]));
}
```
