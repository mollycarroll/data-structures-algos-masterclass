/*
Coding Exercise 25: Binary Search Exercise

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/

const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let midIdx = Math.ceil(arr.length/2);

        if (arr[midIdx] == val) {
            return midIdx;
        } else if (arr[midIdx] > val) {
            left++;
            if (arr[left] == val) return left;
        } else if (arr[midIdx] < val) {
            right--;
            if (arr[right] == val) return right;
        }
    }

    return -1;
}