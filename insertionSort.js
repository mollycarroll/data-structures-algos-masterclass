const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];

        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr
}

console.log(insertionSort([2,420,1,5,32,69]));

// doesn't work unless you use var vs ES6