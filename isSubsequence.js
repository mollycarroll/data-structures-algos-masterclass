// this is the solution....
// establish i and j pointers
// if there aren't two strings, return true
// while the j pointer is less than the length of the second string (longer one)
// check if the characters match between the second string at j, and the first string at i
// if they match, increase i by 1
// if i is the same as the length of the first string, return true
// increase j by 1
// if no trues by the entirety of the loop, return false

const isSubsequence = (first, second) => {
    let i = 0;
    let j = 0;

    if (!first) return true;

    while (j < second.length) {
        if (second[j] === first[i]) {
            i++;
        }

        if (i === first.length) return true;

        j++;
    }

    return false;
}
