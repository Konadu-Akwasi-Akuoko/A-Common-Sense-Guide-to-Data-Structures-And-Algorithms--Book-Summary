// Writing a recursive function to compute 1+2...+n
// Add values to initialSum, the value been added to initialSum must be the number of iterations
function sumRecursive(
  iterationsToRun: number,
  initialSum: number = 0,
  numberOfIterations: number = 1,
) {
  const sum: number = initialSum + numberOfIterations;
  console.log(
    "initialSum + numberOfIterations: ",
    initialSum,
    " + ",
    numberOfIterations,
    " = ",
    sum,
  );
  if (numberOfIterations > iterationsToRun) {
    console.log(initialSum, " + ", numberOfIterations);
    return initialSum;
  } else {
    // Increment numberOfIterations per run, thus sum will be = 3(initialSum) + 3(iterationsToRun)
    // call the function again with the update values
    return sumRecursive(iterationsToRun, sum, numberOfIterations + 1);
  }
}

const result = sumRecursive(5);

console.log("result: ", result);

// fibonncci sequence
function fib(n: number) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

const resultFib = fib(8);
console.log("result: ", resultFib);
