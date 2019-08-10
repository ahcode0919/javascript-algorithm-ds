<!-- markdownlint-disable MD001 -->

# Freecodecamp Intermediate Algorithms

From the Freecodecamp Javascript Certification Intermediate Algorithms module

- [Sum All Numbers In a Range](#sum-all-numbers-in-a-range)

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
