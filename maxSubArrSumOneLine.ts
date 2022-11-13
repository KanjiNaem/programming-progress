let maxSubarraySum = (A: number[]) =>
  A.reduce(
    (p, c) => [Math.max(p[0], p[1] + c), Math.max(p[1] + c, 0)],
    [A[0], A[0]]
  )[0];
