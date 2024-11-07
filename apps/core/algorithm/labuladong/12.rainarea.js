/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let area = 0;
  let minH = 0;

  while (left < right) {
    const r_litter = height[right] < height[left];
    minH = r_litter ? height[right] : height[left];
    const newArea = (right - left) * minH;
    area = newArea > area ? newArea : area;
    if (r_litter) {
      right--;
    } else {
      left++;
    }
  }

  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(false & true)
