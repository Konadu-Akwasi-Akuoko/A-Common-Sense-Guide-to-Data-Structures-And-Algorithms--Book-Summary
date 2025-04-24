/**
 * 392. Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
 *
 */

function isSubsequence(s: string, t: string): boolean {
  // Pointer to track position in string `s`
  let indexOfS = 0;

  // Iterate through each character in string `t`
  for (let i = 0; i < t.length; i++) {
    // If current character in `t` matches the current character in `s`
    if (s[indexOfS] === t[i]) {
      // Move to the next character in `s`
      indexOfS++;

      // If we've matched all characters in `s`, it's a subsequence
      if (indexOfS === s.length) return true;
    }
  }

  // If we reach the end of `t`, check if all characters in `s` were matched
  return indexOfS === s.length;
}
