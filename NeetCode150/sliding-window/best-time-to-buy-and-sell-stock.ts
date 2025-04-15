function maxProfit(prices: number[]): number {
  let lowest = prices[0];
  let profit = 0;

  for (let index = 1; index < prices.length; index++) {
    lowest = Math.min(lowest, prices[index]);
    profit = Math.max(profit, prices[index] - lowest);
  }

  return profit;

  /*
  we begin setting the lowest price with the first number in the input array
  and setting the profit to zero, and after that, looping through its length
  and comparing each value to the lowest, replacing it if its lower and also
  calculating the profit. the lowest value will be kept set to its first ocurrence,
  while the profit will be reevaluated in with each entry, guaranteeing its
  being calculated with its sell value AFTER the buy value
  */
}
