/**
 * 删除有序数组中重复项
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let fist = 1,
        slow = 1;
    while (fist < nums.length) {
        if (nums[fist] !== nums[fist - 1]) {
            nums[slow] = nums[fist];
            ++slow;
        }
        ++fist;
    }
    return slow;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
