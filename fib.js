const fib = (num) => {
    if (num <= 2) {
        return 1
    }

    return fib(num-1) + fib(num-2);
}

// fib(4) = 1 + 1 + 2 + 3

console.log(fib(4));