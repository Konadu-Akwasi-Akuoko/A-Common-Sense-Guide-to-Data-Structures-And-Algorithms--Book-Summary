function BinarySearch(arr: number[], searchValue: number): number | null {
  // First, we establish the lower and upper bounds of where the value
  // we're searching for can be. To start, the lower bound is the first
  // value in the array, while the upper bound is the last value:
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  // We begin a loop in which we keep inspecting the middlemost value
  // between the upper and lower bounds, the while loop would stop working
  // as soon as the lower bound is greater than or equal to the upper bound
  // which would happen as soon as we narrow down our array to the last element:
  while (lowerBound <= upperBound) {
    console.log("-----------------------------------------------");
    console.log("upperBound = " + upperBound);
    console.log("lowerBound = " + lowerBound);
    // We find the midpoint between the upper and lower bounds:
    // If we get a non-integer we round the floating point to an
    // integer with Maths.round()
    let midpoint = Math.round((upperBound + lowerBound) / 2);
    let valueAtMidpoint = arr[midpoint];
    console.log("Value @ midpoint " + valueAtMidpoint);
    console.log("Index of midpoint = " + midpoint);
    // If the value at the midpoint is the one we're looking for, we're done.
    // If not, we change the lower or upper bound based on whether we need
    // to guess higher or lower:
    if (valueAtMidpoint === searchValue) {
      console.log("Value @ midpoint " + valueAtMidpoint);
      return valueAtMidpoint;
    }
    // Or if the searchValue is greater than the valueAtMidPoint.We know that
    // it'll be at the right side of the valueAtMidpoint. So we make the immediate
    // index to the right of the valueAtMidPoint become our lowerBound, and the
    // upperBound remains the same
    else if (searchValue > valueAtMidpoint) {
      lowerBound = midpoint + 1;
      console.log("Now lowerBound = " + lowerBound);
    }
    // Or if the value at searchValue is less than the valueAtMidpoint.We know that
    // it'll be at the left side of the valueAtMidpoint. So we make the immediate
    // index to the left of the valueAtMidPoint become our upperBound, and the
    // upperBound remains the same
    else if (searchValue < valueAtMidpoint) {
      upperBound = midpoint - 1;
      console.log("Now upperBound = " + upperBound);
    }
  }
  // If we've narrowed the bounds until they've reached each other, that
  // means that the value we're searching for is not contained within
  // this array:
  return null;
}

console.log(
  "Use binary search to search for the value of 22 withing this array => [3, 17, 75, 80, 202]"
);
console.log(BinarySearch([3, 17, 75, 80, 202], 22));

console.log(
  "\nUse binary search to search for the value of 202 withing this array => [3, 17, 75, 80, 202]"
);
console.log(BinarySearch([3, 17, 75, 80, 202], 202));


