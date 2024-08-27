// Binary serach algorithm
// [1,2,3,4,5,6,7,8,9,10]

function binarySearch(arr: number[], target: number) {
  let operations = 0;
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    operations++;
    const midpoint = Math.floor((lowerBound + upperBound) / 2);
    const midpointValue = arr[midpoint];

    if (target === midpointValue) {
      return "Operations: " + operations + " Target: " + midpointValue;
    } else if (midpointValue > target) {
      upperBound = midpoint - 1;
    } else {
      lowerBound = midpoint + 1;
    }
  }

  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
