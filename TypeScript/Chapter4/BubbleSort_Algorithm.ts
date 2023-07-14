// The bubble sort algorithm takes an array of numbers as an argument
function BubbleSort(arr: number[]) {
  // In each passthrough of the array, the largest element bubbles to the end
  // And this variable would keep track of the index of the last element that was
  // sorted, so that we don't have to sort the already sorted elements again
  let unsortedUntilIndex = arr.length - 1;
  // At the start of each pass, we assume that the array is not sorted so it's false
  let sorted = false;
  // We would run a for loop to perform the passthrough for us whenever sorted is false
  while (!sorted) {
    // We would assume that the array is sorted at first, so it is true
    // But the moment we encounter an unsorted element, with the if statement we turn it
    // back to false.
    sorted = true;
    // Perform a passthrough of the array, starting from index 0 to the last index which was
    // not sorted, thus i < unsortedUntilIndex.
    for (let i = 0; i < unsortedUntilIndex; i++) {
      // Check to see if the current array element is greater than the next element.
      if (arr[i] > arr[i + 1]) {
        // If it is, then we swap the elements using array destructuring
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // And we turn sorted to false, so that we can perform another pass through the array.
        sorted = false;
      }
    }
    // And we decrease the unsortedUntilIndex by 1 at the end of each passthrough,
    //  so that we don't have to sort the already sorted elements again.
    unsortedUntilIndex -= 1;
  }
  // After we are done with a  thorough and continuous passthrough we return the sorted array
  return arr;
}

console.log(BubbleSort([8, 7, 4, 9, 2]));
