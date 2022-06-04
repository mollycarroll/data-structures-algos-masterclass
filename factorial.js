const factorial = (num) => {
    if (num === 0) {
        return 1;
    }

    if (num < 3) {
        return num;
    }

    return factorial(num-1) * num;
}

console.log(factorial(7));