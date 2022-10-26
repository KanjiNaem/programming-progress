function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];
    }
    if (!isNaN(nums[i])) {
      count++;
    }
  }

  nums.sort((a, b) => a - b);

  return count;
}

const testArr: number[] = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(testArr, 2));
