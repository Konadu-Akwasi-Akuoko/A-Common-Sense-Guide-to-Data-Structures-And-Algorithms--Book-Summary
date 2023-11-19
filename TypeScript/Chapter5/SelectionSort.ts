function selectionSort(array: number[]) {
  // Iterate over each element in the array except the last one
  for (let i = 0; i < array.length - 1; i++) {
    // Assume the current element is the smallest in the unsorted part of the array
    let lowestNumberIndex = i;
    // Iterate over the rest of the array to find if there is any number smaller than the current smallest number
    for (let j = i + 1; j < array.length; j++) {
      // If a smaller number is found, update the index of the smallest number
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    // If a smaller number is found in the unsorted part of the array, swap it with the current element
    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  // Return the sorted array
  return array;
}

// Test the function with an array
console.log(selectionSort([4, 2, 7, 1, 3]));
