/**
 * @param {number[]} nums
 * @param {number} val
 */
const removeElement = function(nums, val) {
  let n = 0;
  let i = nums.length - 1;
  let d = nums.length - 1
  while (i >= 0) {
    if (nums[i] === val) {
      nums[i] = nums[d];
      d--;
      n++;
    }

    i--;
  }

  return { n: nums.length - n,  nums};
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));