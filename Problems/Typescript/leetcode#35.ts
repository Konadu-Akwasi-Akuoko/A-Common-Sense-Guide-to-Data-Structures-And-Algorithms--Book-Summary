// Leetcode 35. Search Insert Position

// Given a sorted array of distinct integers and a target
// value, return the index if the target is found. If not,
// return the index where it would be if it were inserted
// in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums: number[], target: number): number {
  let lowerBound = 0;
  let upperBound = nums.length - 1;
  let midpoint = 0;

  while (lowerBound <= upperBound) {
    midpoint = Math.floor((lowerBound + upperBound) / 2);

    if (target === nums[midpoint]) return midpoint;

    if (nums[midpoint] > target) {
      upperBound = midpoint - 1;
    } else if (nums[midpoint] < target) {
      lowerBound = midpoint + 1;
    }
  }

  return lowerBound;
}
