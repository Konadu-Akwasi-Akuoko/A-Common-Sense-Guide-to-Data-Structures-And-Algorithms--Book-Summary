// Define the function insertionSort that takes an array of numbers as input
function insertionSort(array: number[]) {
  // Loop over the array starting from the second element (index 1)
  for (let i = 1; i < array.length; i++) {
    // Store the current element in a temporary variable
    const tempValue = array[i];
    // Initialize the position for comparison as the index before the current element
    let position = i - 1;

    // While there are elements to the left of the current position
    while (position >= 0) {
      // If the element at the current position is greater than the temporary value
      if (array[position] > tempValue) {
        // Move the element at the current position one step to the right
        array[position + 1] = array[position];
        // Move the position one step to the left
        position = position - 1;
      } else {
        // If the element at the current position is not greater than the temporary value, break the loop
        break;
      }
    }
    // Insert the temporary value at the correct position in the sorted part of the array
    array[position + 1] = tempValue;
  }
  // Return the sorted array
  return array;
}

// Call the function with a test array and log the result
console.log(insertionSort([4, 2, 7, 1, 3]));
