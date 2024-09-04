function minimumSubarrayLength(nums: number[], k: number): number {
  let smallestSize = -1;
  for(let i = 0; i < nums.length; i++) {
    let currValue = nums[i];
    let count = 0;
    for(let j = i; j < nums.length; j++) {
        currValue = currValue | nums[j];
        count++;
        if(currValue >= k) {
            smallestSize = smallestSize < 0 || smallestSize > count ? count : smallestSize;
            break;
        };
    }
  }
  return smallestSize;
};
