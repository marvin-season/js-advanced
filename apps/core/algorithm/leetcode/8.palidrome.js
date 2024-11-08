const isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0, right = s.length - 1;

  console.log(s);
  while (left <= right) {
    if (s.at(left) !== s.at(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));