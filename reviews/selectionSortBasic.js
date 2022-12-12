/* 
Basic implementation of selection sort
https://github.com/omonimus1/competitive-programming/blob/master/Lectures/data-structures/Lecture03.md#selection-sort 

https://www.geeksforgeeks.org/selection-sort/ 
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at 
the beginning. 

The algorithm maintains two subarrays in a given array.

The subarray which already sorted. 
The remaining subarray was unsorted.
In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 
*/

// TODO: test algo with other data sets

const selectionSort = (arr) => {

    for (let i = 0; i < arr.length-1; i++) {
        
        let smallestElementIdx = i;

        if (arr[i] < arr[smallestElementIdx]) {
            smallestElementIdx = i; // 0
        }

        for (let j = i+1; j < arr.length; j++) {

            if (arr[j] < arr[smallestElementIdx]) {
                
                smallestElementIdx = j;
                
                let temp = arr[i];
                // arr[0] to arr[1]
                arr[i] = arr[smallestElementIdx]; // arr[]
                // arr[1] to temp
                arr[smallestElementIdx] = temp;
            }
            
        }
    }

    return arr;
}

// tests
// console.log(selectionSort([4, 20, 12, 10, 7, 9]));
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(selectionSort(nums)); // this doesn't sort correctly, doesn't handle repeat ints :/ plus just isn't in total order