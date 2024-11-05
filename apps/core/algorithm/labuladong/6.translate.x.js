/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */

const reverse = (nums, start, end) => {
  for (let i = start; i < (start + end) / 2; i++) {
    [nums[i], nums[end + start - i - 1]] = [nums[end + start - i - 1], nums[i]];
  }
  console.log(nums);
};
/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const translate = (nums, k) => {
  reverse(nums, 0, nums.length);
  reverse(nums, 0, k % nums.length);
  reverse(nums, k % nums.length, nums.length);

  return nums;
};
//
console.log(translate([-1], 2));

// reverse([1, 2, 3, 4, 5, 6, 7], 2, 5);