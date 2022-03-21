/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function (nums) {
    const _ = nums.reduce((p, c) => {
        if (p[c] === undefined) {
            p[c] = 1;
        } else {
            p[c]++;
        }
        return p;
    }, {});
    return Object.entries(_)
        .sort((a, b) => {
            if (a[1] === b[1]) {
                const c = Math.max(a[0], b[0]);
                const d = a[0] + b[0] - c;
                return c - d;
            }
            return a[1] - b[1];
        })
        .reduce((p, c) => [...p, ...new Array(c[1]).fill(+c[0])], []);
};
frequencySort([2, 3, 1, 3, 2]);
frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]);
frequencySort([1, 1, 2, 2, 2, 3]);
