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
