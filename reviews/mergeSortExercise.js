/*
Coding Exercise 48: merge helper
Coding Exercise 49: Merge Sort

Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and 
an optional comparator function.

The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first 
value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Here's some guidance for how merge sort should work:

Break up the array into halves until you can compare one value with another
Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
Once the array has been merged back together, return the merged (and sorted!) array
*/

// my merge sort algorithm
// TODO: refactor merge and mergeSort functions, not clean or DRY
const merge = (arr1, arr2, comparator) => {
    let merged = [];
    let pointer1 = 0;
    let pointer2 = 0;

    if (comparator) {
        while (merged.length < (arr1.length + arr2.length)) {

            if (arr1[pointer1] && arr2[pointer2]) {

                let difference = comparator(arr1[pointer1], arr2[pointer2]);

                if (difference < 0) {
                    merged.push(arr1[pointer1]);
                    pointer1++;

                } else {
                    merged.push(arr2[pointer2]);
                    pointer2++;
                }

        } else if (!arr1[pointer1] && arr2[pointer2]) {
            merged.push(arr2[pointer2]);
            pointer2++;

        } else if (arr1[pointer1] && !arr2[pointer2]) {
            merged.push(arr1[pointer1]);
            pointer1++;
        }
    }

    } else {
        while (pointer1 < arr1.length && pointer2 < arr2.length) {
            if (arr1[pointer1] < arr2[pointer2]) {
                merged.push(arr1[pointer1]);
                pointer1++;
            } else {
                merged.push(arr2[pointer2]);
                pointer2++;
            }
        }
    }

    while (pointer1 < arr1.length) {
        merged.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        merged.push(arr2[pointer2]);
        pointer2++;
    }

    return merged;
}

// default comparator for mergeSort
const compareNums = (num1, num2) => {
    if (num1 > num2) {
        return 1
    } else if (num1 < num2) {
        return -1;
    }
    return 0;
}

const mergeSort = (arr, comparator = compareNums) => {
    if (arr.length <= 1) {
        return arr;
    }

    let split = Math.floor(arr.length/2);

    if (comparator !== compareNums) {
        let first = mergeSort(arr.slice(0,split), comparator);
        let second = mergeSort(arr.slice(split), comparator);

        if (first && second) {
            if (first.length + second.length == arr.length) {
                return merge(first, second, comparator);
            }
        }
    } else {

        let first = mergeSort(arr.slice(0,split));
        let second = mergeSort(arr.slice(split));

        return merge(first, second);
    }

}