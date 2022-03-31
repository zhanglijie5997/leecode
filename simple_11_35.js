/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.findIndex(target);
    } else {
        if (_ > -1) {
            return nums.findIndex((v) => v > target);
        } else {
            return nums.length;
        }
    }
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 0)); // 4
console.log(searchInsert([1], 0)); // 0
