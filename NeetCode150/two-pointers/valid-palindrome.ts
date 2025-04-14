function isPalindrome(s: string): boolean {
  const sanitizedInput = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let leftIndex = 0;
  let rightIndex = sanitizedInput.length - 1;

  while (leftIndex < rightIndex) {
    if (sanitizedInput[leftIndex] !== sanitizedInput[rightIndex]) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
