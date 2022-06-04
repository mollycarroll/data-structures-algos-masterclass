// establish pointer i
// establish pointer j
// compare values, if the same, move j forward
// if different, set arr at i to the different value and move i forward
// keep going till end of array
// return length of array

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7