class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        // let out = false
        for (let i =0; i < nums.length; i++) {
            if(obj[nums[i]]) {
                return true;
            } else {
                obj[nums[i]] = true;
            }
        }
        return false;
    }
}
