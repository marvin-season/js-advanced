/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {number[]} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for merged array

  // While there are elements to compare
  while (p2 >= 0) {
    // If p1 >= 0 and nums1[p1] is greater than nums2[p2]
    // Put nums1[p1] at the end and decrement p1
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    }
    // Otherwise put nums2[p2] at the end and decrement p2
    else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--; // Move pointer for merged array
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));