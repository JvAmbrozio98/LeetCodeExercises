/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const seen = {};
    for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const remaining = target - nums[i];

    if (remaining in seen) {
      return [i, seen[remaining]];
    } else {

    seen[currentValue] = i;
  }
}
};


twoSum([0, 1, 2, 3, 4, 9, 45, 656], 8);
