const pawnLine = (N: number, M: number) => {
  let result = 0;
  let DP = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));

  for (let i = 0; i < N; i++) DP[i][0] = 1;

  for (let j = 1; j < M; j++) {
    for (let i = 0; i < N; i++) {
      if (i == 0) {
        DP[i][j] = DP[i + 1][j - 1];
        continue;
      }
      if (i == N - 1) {
        DP[i][j] = DP[i - 1][j - 1];
        continue;
      }
      if (i > 0) DP[i][j] = DP[i - 1][j - 1] + DP[i + 1][j - 1];
    }
  }
  for (let i = 0; i < N; i++) result += DP[i][M - 1];
  return result;
};

console.log(pawnLine(4, 3));
