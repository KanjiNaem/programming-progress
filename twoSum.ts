function twoSum(nums: number[], target: number): number[] {
  let twoNum: number[] = [];
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference: number = target - nums[i];

    if (numMap.has(difference)) {
      twoNum[0] = i;
      twoNum[1] = numMap.get(difference);
    }

    numMap.set(nums[i], i);
  }

  twoNum.sort();
  return twoNum;
}
