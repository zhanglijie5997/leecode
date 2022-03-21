/**
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const _ = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let i = 0,
        res = 0;
    for (; i < s.length; i++) {
        const cur = _[s[i]],
            next = _[s[i + 1]];
        res += cur < next ? -cur : cur;
    }
    return res;
};

console.log(romanToInt('III'));
// console.log(romanToInt("IV"))
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));
console.log(romanToInt('DCXXI'));
