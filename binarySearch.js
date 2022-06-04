// create left pointer at start of array, right at end of array
// while left is before right
// create pointer in the middle of the two
// if it's the val, return index
// if too small, increase left pointer
// if too big, decrease right pointer
// if never find val, return -1


const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length-1

    while (left < right) {
        let middle = Math.ceil((left + right) / 2);

        if (arr[middle] === val) {
            return middle
        } else if (arr[middle] < val) {
            console.log('left is ' + left);
            left++;
        } else if (arr[middle] > val) {
            right--;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5], 5));