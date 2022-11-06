const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
  let rows = obstacleGrid.length;
  let columns = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  // first way
  obstacleGrid[0][0] = 1;

  // filling rows
  for (let i = 1; i < rows; i++) {
    obstacleGrid[i][0] =
      obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1 ? 1 : 0;
  }

  // filling colums
  for (let i = 1; i < columns; i++) {
    obstacleGrid[0][i] =
      obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1 ? 1 : 0;
  }

  // filling in rest from (1, 1)
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (obstacleGrid[i][j] === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        continue;
      }
      obstacleGrid[i][j] = 0;
    }
  }

  return obstacleGrid[rows - 1][columns - 1];
};

const testObstacleGrid = [
  [0, 0, 1],
  [0, 1, 0],
  [0, 0, 0],
]; // 1

console.log(uniquePathsWithObstacles(testObstacleGrid));
