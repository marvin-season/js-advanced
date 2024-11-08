/**
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */

function majorityElement(nums) {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) candidate = nums[i];
    count += nums[i] === candidate ? 1 : -1;
  }
  return candidate;
}

console.log(majorityElement([2, 3, 3]));