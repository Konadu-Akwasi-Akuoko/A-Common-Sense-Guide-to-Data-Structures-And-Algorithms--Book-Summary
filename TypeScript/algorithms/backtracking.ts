function solve(row, col) {
  let board: number[][] = [];
  // for each row, run a for loop, and a row is made up of 9 cells
  // The following is the second for loop
  let numsChosen = [];
  // first for loop, to run through the rows one by one
  for (let i = 0; i < 10; i++) {
    // Second for loop for the rows
    for (let i = 0; i < 10; i++) {
      if (col[i] == false) {
        // choose a number that is not inserted into the array
      } else {
        //otherwise add the number that is in the cell to numsChosen
        numsChosen.push(i);
        board[row][col] = i;
      }
    }
  }
}

/**
 * Backtracking
 * As we search for a problem, we can reach a dead end, if that happens
 * we would need to go back and try another solution. That's basically
 * backtracking. Backtracking is almost always associated with recursion
 */

/*
 * Generate  a binary substring of all possible permutations of length k
 */

// Finding a path through a maze, backtracking problem without recursion

/*
 * This chapter describes another important recursive strategy called backtracking.
 * A backtracking algorithm tries to construct a solution to a computational problem
 * incrementally, one small piece at a time. Whenever the algorithm needs to
 * decide between multiple alternatives to the next component of the solution, it
 * recursively evaluates every alternative and then chooses the best one.
 */

// The 8 Queens problem with backtracking

function solveNQueens(N: number): number[][] {
  const solutions: number[][] = [];
  const board: number[] = Array(N).fill(-1);

  function isSafe(row: number, col: number): boolean {
    for (let prevCol = 0; prevCol < col; prevCol++) {
      const prevRow = board[prevCol];
      if (
        prevRow === row || // same row
        prevRow - prevCol === row - col || //same diagonal
        prevRow + prevCol === row + col //same diagonal
      ) {
        return false;
      }
    }
    return true;
  }

  function placeQueens(col: number): void {
    if (col === N) {
      // Found a solution
      solutions.push([...board]);
      return;
    }

    for (let row = 0; row < N; row++) {
      if (isSafe(row, col)) {
        board[col] = row;
        placeQueens(col + 1);
        board[col] = -1; // Backtrack
      }
    }
  }

  placeQueens(0);
  return solutions;
}

// usage
const solutions = solveNQueens(8);
console.log(solutions);
