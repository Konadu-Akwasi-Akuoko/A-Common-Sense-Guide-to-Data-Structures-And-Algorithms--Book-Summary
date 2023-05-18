function LinearSearch(arr: number[], searchValue: number): number | null {
  // We iterate through every element in the array
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    // If we find the value we are looking for we return it's index
    if (element == searchValue) {
      return i;
    }
    // If we find a number that is greater than the value we
    // are looking for we exit the loop early
    else if (element > searchValue) {
      break;
    }
  }
  return null;
}

console.log("Search for 22 in this array => [3, 17, 75, 80, 202]");
console.log(LinearSearch([3, 17, 75, 80, 202], 22)); // => null

console.log("Search for 80 in this array => [3, 17, 75, 80, 202]");
console.log(LinearSearch([3, 17, 75, 80, 202], 80)); // => 80
