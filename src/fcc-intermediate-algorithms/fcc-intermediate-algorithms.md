<!-- markdownlint-disable MD001 -->

# Freecodecamp Intermediate Algorithms

From the Freecodecamp Javascript Certification Intermediate Algorithms module

- [Sum All Numbers In a Range](#sum-all-numbers-in-a-range)
- [Diff Two Arrays](#diff-two-arrays)
- [Seek and Destroy](#seek-and-destroy)

#### Sum All Numbers In a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

```javascript
export function sumAll(arr) {
    const ordered = arr[0] < arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
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
