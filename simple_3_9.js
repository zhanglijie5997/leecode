/**
 * 回文数
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) return false;
    return +x.toString().split('').reverse().join('') === x;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(456));
