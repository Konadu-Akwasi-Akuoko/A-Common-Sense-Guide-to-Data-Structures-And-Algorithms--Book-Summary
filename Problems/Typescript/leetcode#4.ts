/**
 *Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }

  //after merging find the median of the array
  if (mergedArray.length % 2 === 0) {
    const midPoint = mergedArray.length / 2;
    const medianValues = mergedArray[midPoint - 1] + mergedArray[midPoint];
    return medianValues / 2;
  } else {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  }
}
