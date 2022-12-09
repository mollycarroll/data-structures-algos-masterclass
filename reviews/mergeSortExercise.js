/*
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



const merge = (arr1, arr2) => {
    let merged = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            merged.push(arr1[pointer1]);
            pointer1++;
        } else if (arr2[pointer2] < arr1[pointer1]) {
            merged.push(arr2[pointer2]);
            pointer2++;
        }
    }

    if (pointer1 == arr1.length-1) {
        merged.push(arr1[pointer1]);
    } else if (pointer2 == arr2.length-1) {
        merged.push(arr2[pointer2]);
    }

    return merged;
}


const mergeSort = () => {

}