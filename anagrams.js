// check if the same length and return false if not
// initiate empty objects
// keep count of character instances with for loop
// key is the character, value is the count
// compare objects and if same, return true else false

const validAnagram = (first, second) => {
    if (first.length !== second.length) {
        return false
    }

    let firstCount = {};
    let secondCount = {};

    for (let char of first) {
        firstCount[char] = (firstCount[char] || 0) + 1;
    }

    for (let char of second) {
        secondCount[char] = (secondCount[char] || 0) + 1;
    }

   for (let key in firstCount) {
        if (!(key in secondCount)) {
            return false
        }

        if(firstCount[key] !== secondCount[key]) {
            return false
        }
   }

   return true
}

console.log(validAnagram('aaz', 'zza'));