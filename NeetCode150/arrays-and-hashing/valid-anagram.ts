function isAnagram(s: string, t: string): boolean {
  const sortedSArray = s.split("").sort()
  const sortedTArray = t.split("").sort()
  
  const stringSArray = JSON.stringify(sortedSArray)
  const stringTArray = JSON.stringify(sortedTArray)

  if (stringSArray === stringTArray) {
    return true;
  }
  return false;
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))