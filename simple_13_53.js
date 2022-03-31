/**
 * 最大最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let r = 0,
        q = nums[0];
    nums.forEach((v) => {
        r = Math.max(v + r, v);
        q = Math.max(r, q);
    });
    return q;
};

console.log(maxSubArray([-2, -1]));
