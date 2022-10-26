function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      delete nums[i];
    }

    if (!isNaN(nums[i])) {
      count++;
    }
  }
  nums.sort((a, b) => a - b);

  return count;
}

const testArr: number[] = [1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5]; // 7

console.log(removeDuplicates(testArr));
