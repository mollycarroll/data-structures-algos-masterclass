// if string is blank return blank string
// return reverse substring + first character

const reverse = (str) => {
    if (str === '') {
        return '';
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse('awesome'));