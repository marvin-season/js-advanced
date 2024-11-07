/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
    输入：[2,7,9,3,1]
    输出：12
    输入：[1,2,3,1]
    输出：4
 */

/**
 * 设 偷完第x家后，偷到的最高金额为f(x)
 * f(x) = f(x-1) + 0 或者 f(x) = f(x-2) + nums[x];
 *
 * => f(x) = Math.max(f(x-1), f(x-2) + nums[x])
 *
 * base case:
 * f(0) = nums[0]
 */
/**
 *
 * @param {number[]} nums
 */
const rob = function (nums) {
  let fx = new Array(nums.length).fill(0);
  fx[0] = nums[0];
  fx[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i <= nums.length - 1; i++) {
    fx[i] = Math.max(fx[i - 1], (fx[i - 2]) + nums[i]);
  }
  

  return fx[nums.length - 1];
};

console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 2]));
console.log(rob([0]));
