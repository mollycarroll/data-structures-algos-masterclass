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

// provided test data and comparator functions

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];

var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];


var arr5 = [3,4,5]
var arr6 = [1,2]

var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]

function strComp(a, b) {
    if (a < b) { return -1;}
    else if (a > b) { return 1;}
    return 0;
  }

function oldestToYoungest(a, b) {
    console.log('a = ' + a.age);
    console.log('b = ' + b.age);
    return b.age - a.age;
}
 
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}


// my merge sort algorithm

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

// TODO: revise this function

// const mergeSort = (arr) => {
//     console.log('arr from mergeSort call: ' + arr);
//     if (arr.length < 2) {
//         return arr;
//     }

//     let split = Math.floor(arr.length/2);
//     let first = mergeSort(arr.slice(0,split));
//     let second = mergeSort(arr.slice(split));

//     if (first && second) {
//         if (first.length + second.length == arr.length) {
//             return merge(first, second);
//         }
//     }

// }