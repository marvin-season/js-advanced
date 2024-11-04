/**
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 */
const removeDuplicates = function(nums) {
  let slow = 0, quick = 1, n = 0;

  while (quick < nums.length) {
    if (nums[quick] !== nums[slow]) {
      slow++;
      nums[slow] = nums[quick];
    } else {
      n += 1;
    }
    quick++;
  }

  console.log(nums);
  return nums.length - n;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));