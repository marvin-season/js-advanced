/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
 * 


递归多叉树
 */

const getTrace = (memo = {}) => {
  const trace = (coins, amount) => {
    if (amount === 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }

    if (memo[amount]) {
      return memo[amount];
    }

    let restAmount = Infinity;

    for (const coin of coins) {
      const res = trace(coins, amount - coin);
      if (res >= 0 && res < restAmount) {
        restAmount = res;
      }
    }
    memo[amount] = restAmount === Infinity ? -1 : restAmount + 1;

    return memo[amount];
  };

  return trace
};

const coinChange = (coins, amount) => {
  return getTrace()(coins, amount);
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
