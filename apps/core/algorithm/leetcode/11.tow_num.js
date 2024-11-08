/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  let sums = 0;
  while (left < right) {
    sums = numbers[left] + numbers[right];
    if (sums > target) {
      right--;
    } else if (sums < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
};

const numbers = [2, 3, 4];
const target = 6;

console.log(twoSum(numbers, target));
