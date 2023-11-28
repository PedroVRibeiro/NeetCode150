function twoSum(nums: number[], target: number): number[] {
    let result: number[] = []

    for (let num1 of nums) {
      let diff = target - num1
      if (nums.includes(diff) && nums.indexOf(num1) !== nums.lastIndexOf(diff)) {
        result = [nums.indexOf(num1), nums.lastIndexOf(diff)]
      }
    }

    return result;
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([2,4,11,3], 6))