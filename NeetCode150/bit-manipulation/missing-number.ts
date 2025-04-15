function missingNumber(nums: number[]): number {
  let n = nums.length;

  for (let index in [...Array(n).keys()]) {
    n += parseInt(index) - nums[index];
  }

  return n;

  /* 
  here we're initializing n to the quantity of distinct numbers
  in the input array, so that it remains there as the last number in the range, 
  because we will in the for loop add to it every index from an array of n size
  and then subtract each of the numbers in the input array, leaving us
  with only the number that is not present in both.
  */
}

// using Gauss Sum
function missingNumberGauss(nums: number[]): number {
  let sum = (nums.length / 2) * (1 + nums.length);

  for (let index in nums) {
    sum -= nums[index];
  }

  return sum;

  /* 
  the logic here is similar, but we use gauss formula to get
  the sum of all numbers in the range first, and then subtract
  to it all the number in the input array.
  */
}

console.log(missingNumber([8, 6, 4, 2, 3, 5, 7, 0, 1]));
