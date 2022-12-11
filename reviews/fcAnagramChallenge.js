/*
Coding Exercise 1: Anagram Challenge

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, formed from iceman.
*/

const isAnagram = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let charCount1 = {};
    let charCount2 = {};

    for (let c of arr1) {
        charCount1[c] = (charCount1[c] || 0) + 1;
    }

    for (let d of arr2) {
        charCount2[d] = (charCount2[d] || 0) + 1;
    }

    for (let key in charCount1) {
        if ((!!key in charCount2) || charCount2[key] !== charCount1[key]) {
            return false;
        }
    }

    return true;
}