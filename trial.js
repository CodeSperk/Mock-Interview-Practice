function removeElement(nums, val) {
  let k = 0; 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return `${k}, nums: ${nums.slice(0, k)}`; 
}

console.log(removeElement([3, 2, 2, 3], 3));

