// Define a function named hasDuplicateValue that takes an array as a parameter
function hasDuplicateValueLinear(array: number[]) {
  // Declare a variable named steps and initialize it to 0
  let steps = 0;
  // Declare an array named existingNumbers and initialize it to an empty array
  let existingNumbers = [];
  // Use a for loop to iterate over the elements of the array parameter
  for (let i = 0; i < array.length; i++) {
    // Increment the steps variable by 1 for each iteration
    steps++;
    // Check if the element at index i of the array parameter is already in the existingNumbers array
    if (existingNumbers[array[i]] === 1) {
      // If yes, return true, indicating that the array parameter has a duplicate value
      return true;
    } else {
      // If no, add the element at index i of the array parameter to the existingNumbers array with a value of 1
      existingNumbers[array[i]] = 1;
    }
  }
  // After the loop, print the value of steps to the console
  console.log(steps);
  // Return false, indicating that the array parameter does not have a duplicate value
  return false;
}

hasDuplicateValueLinear([
  1, 5, 3, 9, 6, 4, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
]);

// The function hasDuplicateValue takes an array as a parameter and checks if it 
// has any duplicate values. It does this by creating another array called 
// existingNumbers and using its indexes to store 1s for each number encountered 
// in the given array. If the function finds a 1 at the index corresponding to 
// the current number, it means that number has already been seen before and is 
// a duplicate. In that case, the function returns true. Otherwise, it returns 
// false after completing the loop.
