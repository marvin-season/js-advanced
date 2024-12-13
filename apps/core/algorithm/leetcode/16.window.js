/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
  if (nums.length === 0) return 0;

  let left = 0, right = 0;
  let sum = 0;
  let ans = Number.MAX_VALUE;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      ans = Math.min(ans, right - left + 1);
      sum = sum - nums[left];
      left++;
    }

    right++;
  }

  return ans === Number.MAX_VALUE ? 0 : ans;
};


console.log(minSubArrayLen(8, [2, 3, 1, 2, 4, 3]));