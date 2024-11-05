const prices = [7, 6, 1, 3, 5, 9];
/**
 * 如果第i天卖出股票，则最大利润为(该天的股价-前面天数中最小的股价)，然后与已知的最大利润比较，如果大于则更新当前最大利润的值。厉害，学习了。
 * @param prices
 * @returns {number}
 */
const maxProfit = function(prices) {
  let profit = -Infinity;
  let minBuy = Infinity;

  for (let i = 1; i <= prices.length - 1; i++) {
    minBuy = Math.min(minBuy, prices[i - 1]);
    profit = Math.max(prices[i] - minBuy, profit);
  }

  return profit < 0 ? 0 : profit;
};

console.log(maxProfit(prices));