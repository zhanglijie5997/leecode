/**
 * 最后一个字母长度
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const _ = s.split(/\s+/).filter(Boolean);
    return _[_.length - 1].length;
};

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('Today is a nice day'));


/**
 * 5 
 * Offset(10, 0) -> Offset(20, 0) ... 10 + 0 * 10 -> 10 + 1 * 10
 * Offset(30, 0) -> Offset(30, 0) ... 10 + 1 * 10 -> 10 + 2 * 10
 * Offset(40, 0) -> Offset(40, 0)
 * Offset(50, 0) -> Offset(50, 0)
 * Offset(60, 0) -> Offset(60, 0)
 */