<!-- markdownlint-disable MD001 -->

# Freecodecamp Intermediate Algorithms

From the Freecodecamp Javascript Certification Intermediate Algorithms module

- [Sum All Numbers In a Range](#sum-all-numbers-in-a-range)
- [Diff Two Arrays](#diff-two-arrays)
- [Seek and Destroy](#seek-and-destroy)
- [Wherefore Art Thou](#wherefore-art-thou)

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

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

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
