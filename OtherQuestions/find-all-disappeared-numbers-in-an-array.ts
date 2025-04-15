function findDisappearedNumbers(nums: number[]): number[] {
  const numsSet = new Set(nums);
  const missingNumbers = [];

  for (let index = 1; index <= nums.length; index++) {
    if (!numsSet.has(index)) {
      missingNumbers.push(index);
    }
  }

  return missingNumbers;

  /*
  we create a set because it will remove any duplicate numbers and an
  empty array to hold the missing numbers, then we loop through the 
  input array length and evaluate if the set does not have the entry in it,
  and if not, push it to the result array.
  */
}
