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