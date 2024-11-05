const prices = [7, 6, 4, 3, 1];
/**
 * 如果第i天卖出股票，则最大利润为(该天的股价-前面天数中最小的股价)，然后与已知的最大利润比较，如果大于则更新当前最大利润的值。厉害，学习了。
 * @param prices
 * @returns {number}
 */
const maxProfit = function(prices) {
  let profit = -Infinity;

  for (let i = prices.length - 1; i >= 0; i--) {
    const min = Math.min(...prices.slice(0, i));
    if (prices[i] - min >= profit) {
      profit = prices[i] - min;
    }
  }

  return profit < 0 ? 0 : profit;
};

console.log(maxProfit(prices));