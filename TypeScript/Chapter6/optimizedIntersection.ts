function optimizedIntersection(firstArray: number[], secondArray: number[]) {
  // An empty array to store the intersection elements
  const result = [];

  // Loop through each element in the first array
  for (let i = 0; i < firstArray.length; i++) {
    // For each element in the first array, loop through each element in the second array
    for (let j = 0; j < secondArray.length; j++) {
      // If the current element from the first array is equal to the current element from the second array
      if (firstArray[i] === secondArray[j]) {
        // Add the common element to the result array
        result.push(firstArray[i]);
        // break the loop for performing unnecessary steps
        break;
      }
    }
  }

  // Return the result array containing the intersection of the two input arrays
  return result;
}

console.log(optimizedIntersection([1, 3, 4, 5], [4, 2, 7, 8]));
