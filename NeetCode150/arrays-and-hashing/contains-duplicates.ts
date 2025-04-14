function containsDuplicate(nums: number[]): boolean {
  const matchArr: number[] = []

  for (let num of nums) {
    if (matchArr.includes(num)) {
      return true;
    }
    matchArr.push(num)
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))