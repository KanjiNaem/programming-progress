function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];
    }
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
      return count;
    }
    count++;
  }

  return count;
}

const testArr: number[] = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(testArr, 2));
