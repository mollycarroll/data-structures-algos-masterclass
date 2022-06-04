// establish first and second pointers
// sum the numbers at the pointers, if >= target, return length
// if sum is less than target, increase both pointers by 1 and sum again


const minSubarrayLen = (arr, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        // if current window is at least target, shrink window
        } else if (total >= sum) {
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;

        } else {
            break;
        }
    }

    return minLen === Infinity  ? 0 : minLen;

}

console.log(minSubarrayLen([2,3,1,2,4,3], 7));
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 55));