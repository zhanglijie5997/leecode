/**
 * 实现strStr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    const _ = haystack.match(needle);
    return _ ? _.index : -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
