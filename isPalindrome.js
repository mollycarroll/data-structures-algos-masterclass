// if str is 0 return blank
// if str is 1 return true


const isPalindrome = (str) => {
    if (str.length === 0 || str.length === 1) {
        return true
    }

    if (str[0] === str[str.length-1]) {
        let arr = str.split('');
        
        arr.splice(0, 1);
        arr.splice(str.length-2, 1);

        let newStr = arr.join('');

        return isPalindrome(newStr);
    }

    return false
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('molly'));