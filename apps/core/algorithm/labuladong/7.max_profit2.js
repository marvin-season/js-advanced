const prices = [7, 1, 5, 3, 6, 4];
/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 *
 *  动态规划
 *  状态:
 *    第i天手上的利润
 *      有股票dp[i][1]
 *      没股票dp[i][0]
 *
 *  状态转移方程
 *    dp[i][0] = Max(dp[i-1][0], dp[i-1][1] + price[i])
 *    dp[i][1] = Max(dp[i-1][0] - prices[i], dp[i-1][1])
 *
 *  base case:
 *    dp[0][0] = 0;
 *    dp[0][1] = -prices[0]
 *
 *  最后一日，交易结束，手上不持有股票收益即为最大收益: dp[prices.length - 1][0]
 *
 *
 * @param prices
 * @returns {number}
 */
const maxProfit = function(prices) {
  const dp = new Array(prices.length).fill(0).map(v => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  
  return dp[prices.length - 1][0];
};

console.log(maxProfit(prices));