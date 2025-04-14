function maxProfit(prices: number[]): number {
  let lowest = prices[0];
  let profit = 0;

  for (let index = 1; index < prices.length; index++) {
    lowest = Math.min(lowest, prices[index]);
    profit = Math.max(profit, prices[index] - lowest);
  }

  return profit;
}
