/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    const _ = strs[0];
    let l = 0,
        result = '';
    if (strs.length === 1) {
        return strs[0];
    }
    while (l <= _.length) {
        const current = _.substring(0, l);
        const _result = strs
            .reduce((p, c) => {
                return [...p, c.substring(0, l)];
            }, [])
            .every((v) => v === current);
        if (_result) {
            result = current;
        }
        l++;
    }
    return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
