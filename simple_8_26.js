/**
 * 删除有序数组中重复项
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    return [...new Set(nums)].length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2315, 33132, 212, 23, 122]));
