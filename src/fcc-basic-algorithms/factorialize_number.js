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