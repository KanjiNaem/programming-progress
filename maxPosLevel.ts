const A = [5, 6, 3, 3, 2];
const B = [4, 5, 1, 2, 1];
const len = A.length;

const getLevels = (n: number, A: number[], B: number[]): number => {
  let DP = Array(n).fill(-Infinity);
  let c = 0;

  for (let i = 0; i < n; i++) {
    const k = binSearch(DP, A, i);
    console.log(k);
    if (B[i] > DP[k]) {
      DP[k] = B[i];
      continue;
    }
    if (A[i] <= DP[k] && B[i] > DP[k + 1]) {
      DP[k + 1] = B[i];
    }
  }

  console.log(DP);
  while (DP[c] !== -Infinity) c++;
  return c;
};

const binSearch = (DP: number[], A: number[], i: number): number => {
  let l = 0;
  let r = DP.length - 1;
  let mid = 0;

  while (l <= r) {
    mid = ((l + r) / 2) | 0;
    if (A[i] < DP[mid]) {
      l = mid + 1;
      continue;
    }
    if (A[i] > DP[mid]) {
      r = mid - 1;
      continue;
    }
    break;
  }
  return mid;
};

console.log(getLevels(len, A, B));
