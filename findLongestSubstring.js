// if string length is 0, return 0
// establish start and end pointers
// define total variable
// split string into array
// for loop over array, add to total if different character
// if same character, increase start by 1

const findLongestSubstring = (str) => {
    if (str.length === 0) return 0;

    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }

    return longest;
}

console.log(findLongestSubstring('thisisawesome'));