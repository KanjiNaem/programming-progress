const f = (x: number, y: number, A: string[][]): number => {
  let max = 0;
  // Check if element below is not out of bounds and passable.
  if (y < A.length && A[y][x - 1] !== "#") {
    // Recursively call f for the next element below.
    max = f(x, y + 1, A);
  }
  // Check if the element to the right is not out of bounds and passable.
  if (x < A[0].length && A[y - 1][x] !== "#") {
    // Recursively call f for the next element to the right.
    max = Math.max(f(x + 1, y, A), max);
  }
  // Add 1 if current element is a coin.
  return A[y - 1][x - 1] === "C" ? max + 1 : max;
};

const coinMatrixI = [
  [".", "C", "C", ".", "C", "."],
  [".", "#", "C", "C", "C", "#"],
  ["C", ".", ".", ".", "#", "#"],
  [".", "C", "#", "#", ".", "."],
  [".", "C", ".", ".", "C", "."],
];

// f(1, 1);
console.log(f(1, 1, coinMatrixI));
