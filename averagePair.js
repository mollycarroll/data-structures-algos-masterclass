// establish pointer i
// establish pointer j
// find average of them, if target, return true
// else 
// move pointer j up one
// repeat loop
// if no match
// move pointer i up one
// repeat loop
// return false if no match ever

const averagePair = (arr, target) => {
    let i = 0;
    let k = arr[arr.length];

    for (let j = 1; j < arr.length; j++) {
        if ((arr[i] + arr[j] / 2) === target) {
            return true
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + arr[k] / 2) === target) {
            return true
        }
    }

    return false
}

// boooooooo

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));


// solution
const averagePairSolution = (arr, num) => {
    let start = 0;
    let end = arr.length-1;

    while(start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) {
            return true
        } else if (avg < num) {
            start++
        } else {
            end--;
        }
    }
    return false
}


