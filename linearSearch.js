// iterate over array and check if it matches num

const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }

    return -1;
}

console.log(linearSearch([10, 15, 20], 15));