const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        // j is the one next to the lowest, where we're comparing
        for (let j = i+1; j < arr.length; j++) {
            // if the next to value is lower than the first one designated as lowest
            if (arr[j] < arr[lowest]) {
                // if the element next to lowest is fewer, lowest = j
                lowest = j;
            }
        }
        // temp is value of arr[i]
        let temp = arr[i];
        // arr[i] is value of arr[lowest]
        arr[i] = arr[lowest];
        // arr[lowest] is value of temp
        arr[lowest] = temp;
    }

    return arr;
}

console.log(selectionSort([34,22,10,19,17]));

// THIS DOESN'T WORK AND IDK WHY
// const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2]], [arr[idx1]]);

// const selectSortSequel = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[lowest] > arr[j]) {
//                 lowest = j;
//             }
//         }
//     if (i !== lowest) swap(arr, i, lowest);
//     }
//     return arr;
// }

// console.log(selectSortSequel([34,22,10,19,17]));
