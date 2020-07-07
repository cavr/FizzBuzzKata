function calculateFizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz';
    }

    if (n % 3 === 0) {
        return 'fizz';
    }

    if (n % 5 === 0) {
        return 'buzz';
    }

    return n;

}

function fizbuzz(n) {
    const solution = [];

    for (let i = 1; i <= n; i++) {
        const fizzValue = calculateFizzbuzz(i);

        solution.push(fizzValue);
    }

    return solution.join('');
}

export default fizbuzz;