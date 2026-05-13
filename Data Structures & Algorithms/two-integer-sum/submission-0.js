class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        let iterator = nums[i];
        let comparison = target - nums[i];

        if(comparison in obj) {
            return [i, obj[comparison]]
        } else {
            obj[iterator] = i
        }
    }
  }
}
