// check if length is 0 or 1 and handle
// return rr(num - 1) + num

const recursiveRange = (num) => {
    if (num === 0) {
        return 0
    }

    if (num === 1) {
        return 1
    }

    return recursiveRange(num - 1) + num;
}

console.log(recursiveRange(10));