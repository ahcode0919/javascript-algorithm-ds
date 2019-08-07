# Javascript Algorithms and Data Structures
[![Build Status](https://travis-ci.org/ahcode0919/javascript-algorithm-ds.svg?branch=master)](https://travis-ci.org/ahcode0919/javascript-algorithm-ds)

Repository for examples of typical algorithm solutions and data structures in Javascript

- [Freecodecamp - Javascript Algorithms & Data Structures](#freecodecamp-javascript-algorithms-data-structures)
  - [Basic Algorithms](#basic-algorithms)

## Freecodecamp: Javascript Algorithms & Data Structures

Algorithms from the Freecodecamp Javascript coursework

### Basic algorithms

#### Celsius to Fahrenheit

Convert celsius temperature to fahrenheit.

```javascript
export function convertToF(celsius) {
    return (celsius * (9/5)) + 32;
}
```

#### Reverse String

Reverse a string. Assume character set is spaces and `[a-zA-Z0-1]`.

```javascript
export function reverseString(str) {
    return str.split('').reverse().join('');
}
```

#### Factorialize Number

Find the factorial for a non-negative number.

```javascript
export function factorialize(num) {
    if (num < 0) {
        throw 'Number must be positive';
    }

    let factorial = 1;
    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}
```

#### Find Longest Word In String

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
