/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let l = 0,
        r = nums.length;
    while (l < r) {
        if (nums[l] === val) {
            nums[l] = nums[r - 1];
            r--;
        } else {
            l++;
        }
    }
    console.log(nums, l);
    return l;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 3); // 2, nums = [2,2]
