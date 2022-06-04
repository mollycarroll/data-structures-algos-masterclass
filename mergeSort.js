const mergeArrays = (first, second) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < first.length && j < second.length) {
        if (second[j] > first[i]) {
            results.push(first[i]);
            i++;
        } else {
            results.push(second[j]);
            j++;
        }
    }

    while (i < first.length) {
        results.push(first[i]);
        i++;
    }

    while (j < second.length) {
        results.push(second[j]);
        j++;
    }

    return results
}

const mergeSort = (arr) => {
    if (arr.length <=1) return arr;

    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));

    return mergeArrays(left, right);
}

console.log(mergeSort([10,24,76,73,4]));