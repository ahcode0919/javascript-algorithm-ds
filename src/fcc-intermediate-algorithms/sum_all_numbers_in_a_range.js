export function sumAll(arr) {
    const ordered = arr[0] < arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
    let range = 0;
  
    for (let i = ordered[0] + 1; i < ordered[1]; i++) {
      range += i;
    }
    
    return (arr[0] + arr[1]) + range;
}