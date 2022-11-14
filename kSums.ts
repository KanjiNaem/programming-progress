const isSum = (sum: number, k: number): boolean => {
  const numSet = createNumSet(sum, k);

  return subsetSum(numSet, numSet.length, sum) ? true : false; // evil return true if true because return subsetSum doesnt work for some reason T _T
};

const createNumSet = (sum: number, exp: number): number[] => {
  let numSet: number[] = [];
  let i = 1;

  while (i ** exp <= sum) {
    numSet.push(i ** exp);
    i++;
  }

  return numSet;
};

let tab = Array(2000)
  .fill(0)
  .map(() => Array(2000).fill(-1));

function subsetSum(a: number[], n: number, sum: number): any {
  if (sum == 0) return 1;
  if (n <= 0) return 0;
  if (tab[n - 1][sum] != -1) return tab[n - 1][sum];
  if (a[n - 1] > sum) return (tab[n - 1][sum] = subsetSum(a, n - 1, sum));
  return (tab[n - 1][sum] =
    subsetSum(a, n - 1, sum) || subsetSum(a, n - 1, sum - a[n - 1]));
}

const testSum = 36;
const testK = 3;

console.log(isSum(testSum, testK));
