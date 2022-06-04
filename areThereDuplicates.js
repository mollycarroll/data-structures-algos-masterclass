// loop through args and make object
// if any values are more than 1, return true

const areThereDuplicates = (...args) => {
    let counter = {};

    for (let num of args) {
        counter[num] = (counter[num] || 0) + 1;
    }

    for (let count of Object.values(counter)) {
        if (count > 1) {
            return true
        }
    }

    return false
}


console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 1));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));