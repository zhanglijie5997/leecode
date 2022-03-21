/**
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    const _ = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        const v = s[i];
        stack.push(_[v]);
        if (v !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('([)]'));
console.log(isValid('((([)])'));
