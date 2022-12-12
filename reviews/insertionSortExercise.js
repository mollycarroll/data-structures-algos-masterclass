/*
Coding Exercise 47: Insertion Sort

Implement insertionSort  . Given an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator 
function. The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value 
is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal. The default comparator you provide should
 assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Insertion Sort

Here's some guidance for how insertion sort should work:

Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values.

*/

// TODO: implement algorithm with comparator parameter option

// basic algorithm that only deasl with sorting arrays with numbers
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];


        for (let j = i - 1; j >=0 && arr[j] > currentVal; j--) { 
            arr[j+1] = arr[j];
            arr[j] = currentVal;
        }
    }

    return arr
}