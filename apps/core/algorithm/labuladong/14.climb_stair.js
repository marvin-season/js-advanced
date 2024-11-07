/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
 */

/**
 * 
 * @param {number} n 
 * 
 * 分析： 
 * 状态：
 *      第i阶有 dp[i]种爬法
 * 状态转移方程：
 *      dp[i] = dp[i-1] * 1 + dp[i-2] * (2 - 1)
 * base case
 *      dp[1] = 1
 *      dp[2] = 2
 * 
 **/
// 1 1 2 3 5 8
const climbStairs = function(n) {
    let dp = [1, 1];
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

console.log(climbStairs(3));
console.log(climbStairs(5));