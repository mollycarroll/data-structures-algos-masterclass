const power = (base, exponent) => {
    if (exponent === 0) {
        return 1
    }

    return power(base, exponent-1) * base;
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));

// yaaaaayyyy